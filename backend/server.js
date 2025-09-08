require('dotenv').config();
const express = require('express');
const cors = require('cors');

const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'https://xaloc.onrender.com','https://xaloc.in/'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

// Test route to verify environment variables
app.get('/test-config', (req, res) => {
  res.json({
    gmailUser: process.env.GMAIL_USER ? 'Set' : 'Not set',
    gmailPass: process.env.GMAIL_PASS ? 'Set' : 'Not set',
    userLength: process.env.GMAIL_USER?.length || 0,
    passLength: process.env.GMAIL_PASS?.length || 0
  });
});

// Helper function to create transporter
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true, // Enable debug output
    logger: true // Log to console
  });
}

// POST /contact route with improved error handling
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form submission received:', { name, email, messageLength: message?.length });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Verify environment variables
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const transporter = createTransporter();

  // Verify the connection
  try {
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return res.status(500).json({ 
      error: 'Email configuration error', 
      details: verifyError.message 
    });
  }

  const mailOptions = {
    from: `"Contact Form - ${name}" <${process.env.GMAIL_USER}>`, // Use your Gmail as sender
    to: 'xalocmediaparters@gmail.com',
    replyTo: email, // Set reply-to as the form submitter's email
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form submission:

Name: ${name}
Email: ${email}
Message:
${message}

---
This message was sent from your website contact form.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b00;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">This message was sent from your website contact form.</p>
      </div>
    `
  };

  try {
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.json({ 
      success: true, 
      message: 'Email sent successfully.',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });
    
    // Provide more specific error messages
    let userMessage = 'Failed to send email.';
    if (error.code === 'EAUTH') {
      userMessage = 'Authentication failed. Please check email credentials.';
    } else if (error.code === 'ECONNECTION') {
      userMessage = 'Connection failed. Please check internet connection.';
    } else if (error.responseCode === 535) {
      userMessage = 'Invalid credentials. Please check your app password.';
    }
    
    res.status(500).json({ 
      error: userMessage,
      technical: error.message // Include technical details for debugging
    });
  }
});

// New endpoint for job applications
app.post('/job-application', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Job application received:', { name, email, messageLength: message?.length });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const transporter = createTransporter();

  try {
    await transporter.verify();
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return res.status(500).json({ 
      error: 'Email configuration error', 
      details: verifyError.message 
    });
  }

  const mailOptions = {
    from: `"Job Application - ${name}" <${process.env.GMAIL_USER}>`,
    to: 'xalocmediaparters@gmail.com',
    replyTo: email,
    subject: `New Job Application from ${name}`,
    text: `You have a new job application:

Name: ${name}
Email: ${email}
Message:
${message}

---
This message was sent from your website job application form.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b00;">New Job Application</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">This message was sent from your website job application form.</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Job application email sent:', info.messageId);
    res.json({ success: true, message: 'Job application sent successfully.', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending job application email:', error);
    res.status(500).json({ error: 'Failed to send job application email.', technical: error.message });
  }
});

// New endpoint for newsletter signup
app.post('/newsletter', async (req, res) => {
  const { email } = req.body;

  console.log('Newsletter signup received:', { email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const transporter = createTransporter();

  try {
    await transporter.verify();
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return res.status(500).json({ 
      error: 'Email configuration error', 
      details: verifyError.message 
    });
  }

  const mailOptions = {
    from: `"Newsletter Signup" <${process.env.GMAIL_USER}>`,
    to: 'xalocmediaparters@gmail.com',
    subject: 'New Newsletter Signup',
    text: `New newsletter signup with email: ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b00;">New Newsletter Signup</h2>
        <p>Email: ${email}</p>
        <p>This message was sent from your website newsletter signup form.</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Newsletter signup email sent:', info.messageId);
    res.json({ success: true, message: 'Newsletter signup sent successfully.', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending newsletter signup email:', error);
    res.status(500).json({ error: 'Failed to send newsletter signup email.', technical: error.message });
  }
});

// New endpoint for service inquiry
app.post('/service-inquiry', async (req, res) => {
  const { name, email, service, message } = req.body;

  console.log('Service inquiry received:', { name, email, service, messageLength: message?.length });

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Name, email, service, and message are required.' });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const transporter = createTransporter();

  try {
    await transporter.verify();
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return res.status(500).json({ 
      error: 'Email configuration error', 
      details: verifyError.message 
    });
  }

  const mailOptions = {
    from: `"Service Inquiry - ${name}" <${process.env.GMAIL_USER}>`,
    to: 'xalocmediaparters@gmail.com',
    replyTo: email,
    subject: `New Service Inquiry from ${name}`,
    text: `You have a new service inquiry:

Name: ${name}
Email: ${email}
Service Interested In: ${service}
Message:
${message}

---
This message was sent from your website service inquiry form.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b00;">New Service Inquiry</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">This message was sent from your website service inquiry form.</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Service inquiry email sent:', info.messageId);
    res.json({ success: true, message: 'Service inquiry sent successfully.', messageId: info.messageId });
  } catch (error) {
    console.error('Error sending service inquiry email:', error);
    res.status(500).json({ error: 'Failed to send service inquiry email.', technical: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
