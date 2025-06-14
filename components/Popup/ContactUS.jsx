'use client';

import Swal from 'sweetalert2';

// Отдельный компонент для ввода Email
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

// Отдельный компонент для ввода текста вопроса
async function InputQuestion(email) {
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

// Основной компонент ContactUS
const ContactUS = async () => {
      try {
            // Первый шаг: запрашиваем email
            const email = await InputEmail();

            // Второй шаг: запрашиваем текст вопроса
            const { email: finalEmail, question } = await InputQuestion(email);

            // Третий шаг: выводим финальное сообщение с собранными данными
            Swal.fire({
                  icon: "info",
                  title: "Спасибо за обращение!",
                  text: `Мы скоро ответим.`,
                  timer: 3000,
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false
            });
      } catch (err) {
            console.error(err.message); // Пользователь отменил диалог
      }
};

export default ContactUS;