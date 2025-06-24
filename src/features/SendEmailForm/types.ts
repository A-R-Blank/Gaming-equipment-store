export type EmailInputResult = { value: string | null };
export type QuestionInputResult = { value: string | null };

export type SendMailData = {
  user_email: string;
  user_question: string;
};