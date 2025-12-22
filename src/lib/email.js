import nodemailer from 'nodemailer'

// Lazy transporter creation
function getTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

export async function sendInvoiceEmail(to, booking) {
  const transporter = getTransporter()
  
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
      <p><strong>Service:</strong> ${booking.serviceName}</p>
      <p><strong>Duration:</strong> ${booking.duration} days</p>
      <p><strong>Location:</strong> ${booking.location}</p>
      <p><strong>Address:</strong> ${booking.address}</p>
      <p><strong>Total Cost:</strong> ${booking.totalCost} BDT</p>
      <p><strong>Status:</strong> ${booking.status}</p>
      <hr/>
      <p>Thank you for choosing Care.IO!</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully to:', to)
    return true
  } catch (error) {
    console.error('Email error:', error.message)
    throw error
  }
}