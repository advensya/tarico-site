import { createTransport } from "nodemailer";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const config = useRuntimeConfig();

	const transporter = createTransport({
		host: config.mailerHOST,
		port: parseInt(config.mailerPort!),
		secure: config.mailerSECURE ? true : false,
		auth: {
			user: config.mailerUser,
			pass: config.mailerPass,
		},
	});

	const mailOptions = {
		from: config.mailerUser,
		subject: "Nouveau message via le formulaire",
		to: "contact@tarico.io",
		text: body.content,
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error("Erreur envoi mail :", error);
		return { success: false };
	}
});
