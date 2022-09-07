<?php

    // Honeypot to catch spambots
    $honeypot = FALSE;
    if (!empty($_REQUEST['contact_me_by_fax_only']) && (bool) $_REQUEST['contact_me_by_fax_only'] === TRUE && ($_REQUEST['nickname']!== '')) {
    $honeypot = TRUE;
    log_spambot($_REQUEST);
    # treat as spambot
    } else {
    # process as normal

    if(isset($_POST['email']) && $_POST['email'] != '' && ($_POST['name']) && ($_POST['subject']) && ($_POST['message'])) {
        //if $_POST['email'] has an email, && it is not an empty string - first check
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            //validate the email is formatted correctly contains '@' and '.'
            //submit the form

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
            header("HTTP/1.1 200 OK");
            $message_sent = true;

        } else {
            header("HTTP/1.1 400 Bad Request");
            $invalid_class_name = 'form-invalid';
        }
    }
}

?>

<!-- if(mail($mailTo, "Message from Charles' Website", $messageSubject, $body)) {
                echo 'success';
            } else {
                echo 'The server failed to send the message. Please try again later.';
            } -->

                    