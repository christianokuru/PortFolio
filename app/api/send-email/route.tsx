// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, lastName, email, phone, message } = await request.json();

  // Create a transporter object using your Gmail credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER, // Your Gmail account
    subject: `New contact request from ${name} ${lastName}`,
    text: `Name: ${name} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

// \nService: ${service}
