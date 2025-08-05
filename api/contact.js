import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const apiemail =process.env.APP_EMAIL ? process.env.APP_EMAIL :"maazharoon900@gmail.com";
  const apipassword = process.env.APP_PASSWORD ;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, subject } = req.body;

  if (!name || !email || !message || !subject) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: apiemail,
      pass: apipassword,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.APP_EMAIL,
    subject: `${subject} (from ${name})`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ message: "Email sending failed" });
  }
}

