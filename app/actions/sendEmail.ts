'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${formData.name}" <${formData.email}>`,
      to: process.env.MAIL_RECEIVER_ADDRESS, // where you want the messages to go
      subject: `📬 New Contact Message: ${formData.subject}`,
      html: `
        <h2>New message from Nexolinx Contact Form</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong><br/>${formData.message}</p>
      `,
    })

    return { success: true }
  } catch (error: any) {
    console.error('Error sending email:', error)
    return { success: false, error: error.message }
  }
}
