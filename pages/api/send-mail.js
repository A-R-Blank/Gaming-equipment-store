import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

let transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не поддерживается' });
  }

  const { user_email, user_question } = req.body;

  try {
    await transporter.sendMail({
      from: `"Support Team" <${EMAIL_USER}>`,
      to: 'comedi2290@hosliy.com',
      subject: 'Новый вопрос с сайта',
      html: `
        <strong>${user_email}</strong> задал вопрос:<br/>
        ${user_question}<br/><br/>
        Пожалуйста, свяжитесь с ним!
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    res.status(500).json({ message: 'Ошибка отправки письма' });
  }
}