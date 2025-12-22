import nodemailer from 'nodemailer'

// Only create transporter if credentials are available
let transporter = null
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

export async function sendInvoiceEmail(to, booking) {
  if (!transporter) {
    console.log('Email not configured - skipping email send')
    return
  }

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
    console.log('Email sent successfully to:', to)
  } catch (error) {
    console.error('Email error:', error.message)
    throw error
  }
}