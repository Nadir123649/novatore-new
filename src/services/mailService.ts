import nodemailer from 'nodemailer'; 
interface MailOption {
  from: string;
  to: any;
  subject: string;
  text?: string;
  html?: string;
  attachments?: any;
}

const sendEmail = async (mailOptions: MailOption) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_USER_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail(mailOptions);
    console.info("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Email sending error:", error);
  }
};

export { sendEmail };