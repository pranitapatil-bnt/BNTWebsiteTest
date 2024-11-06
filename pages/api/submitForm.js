import nodemailer from 'nodemailer';
import multer from 'multer';
const upload = multer().single('resumeFile');

export const config = {
  api: {
    bodyParser: false
  }
}


export default async function handler(req, res) {

  if (req.method === 'POST') {

    upload(req, res, async (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error handling FormData' });
        return;
      }

      const formData = req.body;
      const { name, email, phone, coverletter, positionName, emailDetails } = formData;
      const { host, id, port, ps } = JSON.parse(emailDetails)


      console.log("positionName : ", positionName)

      const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        auth: {
          user: id,
          pass: ps,
        },
      });

const mailOptions = {
from: 'noreply@bnt-soft.com',
to: 'ml.careers@bnt-soft.com',
subject: `New application - ${positionName} `,
text: 
`Dear Recruiter,
 
You have received following Job application.

Name: ${name}
Email: ${email}
Phone: ${phone}
Cover Letter: ${coverletter}


Regards,
Careers @ BNT
        
`,
  attachments: req.file
    ? [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
      },
    ]
    : [],
};


const thanksMailForUser = {
from: 'noreply@bnt-soft.com',
to: email,
cc: 'ml.careers@bnt-soft.com',
subject: `Thanks for your application at BNT SOFT`,
text: 
`Dear ${name},

This is to let you know that we have received your application. 
We appreciate your interest in BNT SOFT and the Job Position for which you applied. 
If your profile is shortlisted, you can expect a phone call from our Human Resources team shortly.
Thank you, again. We do appreciate the time that you invested in this application.

Sincerely,
      
HR Manager
BNT SOFT PVT LTD
`,

}




      try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(thanksMailForUser);

        res.status(200).json({ message: 'Form submission successful!' });


      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
      }

    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}



