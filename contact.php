<?php

    /* echo '<pre>';
        print_r($POST);
    echo '</pre>'; */   /* to test initialization */


    $message_sent = false;
    //message sent default false until two if conditions met

    //honeypot
    $honeypot = FALSE;
if (!empty($_REQUEST['contact_me_by_fax_only']) && (bool) $_REQUEST['contact_me_by_fax_only'] === TRUE) {
    $honeypot = TRUE;
    log_spambot($_REQUEST);
    # treat as spambot
} else {
    # process as normal


    if(isset($_POST['email']) && $_POST['email'] != '') {
        //if $_POST['email'] has an email, && it is not an empty string - first check
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            //validate the email is formatted correctly contains '@' and '.'
            //submit the form
            
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $messageSubject = $_POST['subject'];
            $message = $_POST['message'];

            $to = 'bentleyhamm@gmail.com';
            $body = ''; 

            $body .= 'From: '.$userName."\r\n";
            $body .= 'Email: '.$userEmail."\r\n";
            $body .= 'Subject: '.$messageSubject."\r\n";
            $body .= 'Message: '."\r\n".$message."\r\n";

            mail($to, "Message from Digital Studio", $messageSubject, $body);

            $message_sent = true;
        }
        else {
            $invalid_class_name = 'form-invalid';
        }
    }
}
?>


<!-- Insert Charles Head, etc -->


<?php
                    if($message_sent):
                ?>
                    <div class="form-holder">
                        <h3>
                            Thanks you! We'll be in touch shortly.<br>
                            Inspirational view of beautiful Lake Louse, AB Canada
                        </h3>
                    </div>
                <?php
                    else:
                ?>



<!-- Contact Form -->
<form id="contact-form" action="contact.php" method="POST">
                    <!-- Honeypot for spambots -->
                    <input type="checkbox" name="contact_me_by_fax_only" value="1" class="user-cannot-see" tabindex="-1" autocomplete="off">
                    <label for="nickname" aria-hidden="true" class="user-cannot-see"> Nickname
                    <input type="text" name="nickname" id="nickname" class="user-cannot-see" tabindex="-1" autocomplete="off"></label>

                    <label>Name</label>
                    <input class="input-field" id="name" type="text" name="name" required>

                    <!-- <label>Phone</label>
                    <input class="input-field" id="phone" type="number" name="Phone"> -->

                    <label>Email</label>
                    <input class="input-field  <?= $invalid_class_name ?? '' ?>" id="email" type="email" name="email" required>

                    <label>Subject</label>
                    <input class="input-field" id="subject" type="text" name="subject">

                    <label>How can we help you?</label>
                    <textarea class="input-field" id="message" type="text" name="message"></textarea required>

                    <input id="submit-btn" type="submit" value="Send">
                </form>
                <?php
                    endif;
                ?>


<!-- Insert Footer -->

</body>
</html>