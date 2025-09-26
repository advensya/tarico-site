import { createTransport } from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = createTransport({
    host: process.env.MAILER_HOST,
    port: parseInt(process.env.MAILER_PORT!),
    secure: process.env.MAILER_SECURE ? true : false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAILER_USER,
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
