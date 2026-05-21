import nodemailer from 'nodemailer';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').Actions} */
export const actions = {
	quote: async ({ request }) => {
		const data = await request.formData();

		const name = String(data.get('name') ?? '').trim();
		const phone = String(data.get('phone') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const service = String(data.get('service') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || !phone || !service) {
			return fail(400, {
				error: 'Please fill in your name, phone number, and the service you need.',
				values: { name, phone, email, service, message },
			});
		}

		/** @type {Record<string, string>} */
		const serviceLabels = {
			'cctv-new': 'CCTV / Camera System',
			'access-control': 'Access Control',
			'legacy-upgrade': 'Legacy System Upgrade',
			'low-voltage': 'Low Voltage Wiring',
			'voip-networking': 'VOIP & Networking',
			'solar-security': 'Solar Security',
			other: 'Other / Not Sure',
		};

		const transporter = nodemailer.createTransport({
			host: env.SMTP_HOST,
			port: Number(env.SMTP_PORT ?? 587),
			secure: env.SMTP_SECURE === 'true',
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASS,
			},
		});

		const body = `
New quote request from the Motor City Security website.

Name:    ${name}
Phone:   ${phone}
Email:   ${email || '(not provided)'}
Service: ${serviceLabels[service] ?? service}

Message:
${message || '(none)'}
		`.trim();

		try {
			await transporter.sendMail({
				from: `"Motor City Security Website" <${env.SMTP_USER}>`,
				to: env.LEAD_EMAIL,
				replyTo: email || undefined,
				subject: `New Quote Request — ${name} (${serviceLabels[service] ?? service})`,
				text: body,
			});
		} catch (err) {
			console.error('Email send failed:', err);
			return fail(500, {
				error: 'There was a problem sending your request. Please call us directly at (586) 800-3188.',
				values: { name, phone, email, service, message },
			});
		}

		return { success: true };
	},
};
