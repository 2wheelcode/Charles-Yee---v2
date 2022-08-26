<?php

if (isset($_POST['submit'])) {

    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];

    // @todo Change out my email for Charles upon launch
    $mailTo = 'bentleyhamm@gmail.com';
    //$mailTo = 'charles.wj.yee@gmail.com';
    $body = '';

    $body .= 'From: '.$userName."\r\n";
    $body .= 'Email: '.$userEmail."\r\n";
    $body .= 'Subject: '.$messageSubject."\r\n";
    $body .= 'Message: '."\r\n".$message."\r\n";

    mail($mailTo, "Message from Charles' Website", $messageSubject, $body);

}