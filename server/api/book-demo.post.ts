import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const config = useRuntimeConfig();

	const transporter = nodemailer.createTransport({
		host: config.mailerHost,
		port: parseInt(config.mailerPort!),
		secure: config.mailerSecure ? true : false,
		auth: {
			user: config.mailerUser,
			pass: config.mailerPass,
		},
	});

	const mailOptions = {
		from: config.mailerUser,
		to: "contact@tarico.io",
		subject: "Demande démo emit via le site",
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
