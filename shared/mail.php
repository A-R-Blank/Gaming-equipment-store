<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$data = json_decode(file_get_contents("php://input"), true);

$email = $data['user_email'];
$question = $data['user_question'];


$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'tetyand@mail.ru';
$mail->Password = '77Hu3f1GxNxgKcyiVxL1';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;


$mail->setFrom('tetyand@mail.ru');
$mail->addAddress('comedi2290@hosliy.com');


$mail->isHTML(true);
$mail->Subject = 'Вопрос с сайта';
$mail->Body    = "<p>$email задал следующий вопрос:</p><p>$question</p>";


if (!$mail->send()) {
    http_response_code(500);
    echo 'Ошибка отправки письма!';
} else {
    http_response_code(200);
    echo 'Письмо отправлено успешно!';
}

exit();
?>