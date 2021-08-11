
<?php
$to = "automastercto@gmail.com";
$subject = "Заказ iProg";
$message = "Имя: ".$_POST['fio']."
E-mail: ".$_POST['mail'];
$header = "Content-type:text/plain; charset = UTF-8\r\nReply-To:\r\nFrom: <contact>";
if (mail($to, $subject, $message, $header)) {
  echo ('Заявка отправлена! Мы с Вами свяжемся');
  //  echo ('<br/><br/><br/><img src="images/svg/ok.svg" alt="" />');
}
else {
  echo ('Ошибка! Попробуйте снова');
}
?>