import nodemailer from 'nodemailer';


const EMAIL_USER = 'tetyand@mail.ru';
const EMAIL_PASSWORD = '77Hu3f1GxNxgKcyiVxL1';

let transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD
  }
});

// let transporter = nodemailer.createTransport({
//   service: 'mail.ru',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   },
//   logger: true, // Включаем ведение логов
//   debug: true // Включаем отладочный режим
// });

(async () => {
  try {

    const user_email = 'example@example.com';
    const user_question = 'Какой-нибудь вопрос пользователя';


    let info = await transporter.sendMail({
      from: `"Support Team" <${EMAIL_USER}>`,
      to: 'comedi2290@hosliy.com',
      subject: 'Новый вопрос с сайта',
      html: `
        <strong>${user_email}</strong> задал вопрос:<br/>
        ${user_question}<br/><br/>
        Пожалуйста, свяжитесь с ним!
      `
    });

    console.log('Письмо отправлено:', info.response);
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
  }
})();