"use client";

import Swal from 'sweetalert2';

const ContactUS = () => {
  const sendEmail = async () => {
    try {
      const email = await InputEmail();
      const { email: finalEmail, question } = await InputQuestion(email);
      const data = {
        user_email: finalEmail,
        user_question: question
      };
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Спасибо за обращение!",
          text: `Мы скоро ответим.`,
          timer: 3000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Ошибка отправки!",
          text: "Что-то пошло не так. Повторите попытку позже.",
          timer: 3000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false
        });
        }
    } catch (err) {
      console.error((err as Error).message);
      }
  };
  sendEmail();
};

async function InputEmail() {
  const { value: email } = await Swal.fire({
    title: "Введите email:",
    input: "email",
    inputLabel: "Ваш email",
    inputPlaceholder: "example@example.com",
    confirmButtonText: "Далее",
    cancelButtonText: "Отмена",
    showCancelButton: true
  });
  if (!email) throw new Error('Пользователь отменил ввод');
  return email;
}

async function InputQuestion(email: string) {
  const { value: question } = await Swal.fire({
    title: "Задайте свой вопрос:",
    input: "textarea",
    inputLabel: "Вопрос",
    inputPlaceholder: "Опишите свой вопрос тут...",
    inputAttributes: {
      "aria-label": "Тип вашего сообщения"
    },
    confirmButtonText: "Отправить",
    cancelButtonText: "Отменить",
    showCancelButton: true
  });
  if (!question) throw new Error('Пользователь отменил ввод');
  return { email, question };
}

export default ContactUS;