import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function sendInvoiceEmail(to, booking) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Booking Invoice - Care.IO',
    html: `
      <h1>Booking Confirmation</h1>
      <p>Thank you for booking with Care.IO.</p>
      <p>Service: ${booking.serviceName}</p>
      <p>Duration: ${booking.duration} days</p>
      <p>Location: ${booking.location}</p>
      <p>Total Cost: ${booking.totalCost} BDT</p>
      <p>Status: ${booking.status}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent')
  } catch (error) {
    console.error('Email error:', error)
  }
}