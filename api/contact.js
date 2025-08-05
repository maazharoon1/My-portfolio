import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("EMAIL:", process.env.APP_EMAIL);
console.log("PASS:", process.env.APP_PASSWORD ? "Loaded" : "Missing");

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
      user: import.meta.env.APP_EMAIL,
      pass: import.meta.env.APP_PASSWORD,
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

