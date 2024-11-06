import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: true,
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, name, companyName, email, phoneNumber, phone, message, businessType, services, emailDetails } = req.body;
    const { host, id, port, ps } = JSON.parse(emailDetails);

    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      auth: {
        user: id,
        pass: ps,
      },
    });

    // Common options for both forms
    let mailOptions;
    let thanksMailForUser;

    // Logic for Contact Us form
    if (firstName && lastName && email && phoneNumber && message) {
      mailOptions = {
        from: 'noreply@bnt-soft.com',
        to: 'marketing@bnt-soft.com',
        subject: 'New Contact Us Submission',
        text: `Hello Team,

You have received a new inquiry from the Contact Us form.

First Name: ${firstName}
Last Name: ${lastName}
Company Name: ${companyName || 'N/A'}
Email: ${email}
Phone Number: ${phoneNumber}
Message: ${message}

Best regards,
`,
      };

      thanksMailForUser = {
        from: 'noreply@bnt-soft.com',
        to: email,
        subject: 'Thanks for reaching out to us!',
        text: `Hello ${firstName},

Thank you for contacting us! We appreciate your interest and will get back to you shortly.

Best regards,
BNT Team`,
      };
    }

    // Logic for Connect Us form
    if (businessType && services) {
      mailOptions = {
        from: 'noreply@bnt-soft.com',
        to: 'marketing@bnt-soft.com',
        subject: 'New Connect Us Submission',
        text: `Hello Team,

You have received a new inquiry from the Connect Us form.

Name: ${name}
Email: ${email}
Phone: ${phone}
Business Type: ${businessType}
Services: ${services}
Message: ${message}

Best regards,
`,
      };

      thanksMailForUser = {
        from: 'noreply@bnt-soft.com',
        to: email,
        subject: 'Thanks for reaching out to us!',
        text: `Hello ${name},

Thank you for contacting us! We appreciate your interest and will get back to you shortly.

Best regards,
BNT Team`,
      };
    }

    try {
      if (mailOptions && thanksMailForUser) {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(thanksMailForUser);
        res.status(200).json({ message: 'Form submission successful!' });
      } else {
        res.status(400).json({ error: 'Form data is incomplete or invalid.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

