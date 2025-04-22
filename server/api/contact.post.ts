import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: "mail.tarico.io",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL,
    to: "contact@tarico.io",
    subject: "Nouveau message via le formulaire",
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
