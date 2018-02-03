<?php
/**
 * PHPMailer simple contact form example.
 * If you want to accept and send uploads in your form, look at the send_file_upload example.
 */
//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';

if (array_key_exists('to', $_POST)) {
    $err = false;
    $msg = '';
    $email = '';

    //first name
    if (array_key_exists('first_name', $_POST)) {
        $first_name = substr(strip_tags($_POST['first_name']), 0, 255);
    } else {
        $first_name = 'No name given';
    }

    //last name
    if (array_key_exists('last_name', $_POST)) {
        $last_name = substr(strip_tags($_POST['last_name']), 0, 255);
    } else {
        $last_name = 'No last name given';
    }

    //Apply some basic validation and filtering to the query
    if (array_key_exists('comment', $_POST)) {
        //Limit length and strip HTML tags
        $comment = substr(strip_tags($_POST['comment']), 0, 16384);
    } else {
        $comment = '';
        $msg = 'No comment provided!';
        $err = true;
    }

    //Validate to address
    //Never allow arbitrary input for the 'to' address as it will turn your form into a spam gateway!
    //Substitute appropriate addresses from your own domain, or simply use a single, fixed address
    if (array_key_exists('to', $_POST) {
        $to = $_POST['to'] . 'vishvesh01@yahoo.com';
    } else {
        $to = 'vishvesh01@yahoo.com';
    }

    //Make sure the address they provided is valid before trying to use it
//    if (array_key_exists('email', $_POST) and PHPMailer::validateAddress($_POST['email'])) {
//        $email = $_POST['email'];
//    } else {
//        $msg .= "Error: invalid email address provided";
//        $err = true;
//    }

    if (!$err) {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'localhost';
        $mail->Port = 2500;
        $mail->CharSet = 'utf-8';
        //It's important not to use the submitter's address as the from address as it's forgery, which will cause your messages to fail SPF checks. Use an address in your own domain as the from address, put the submitter's address in a reply-to
        $mail->setFrom('contact@example.com', (empty($name) ? 'Contact form' : $name));
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);
        $mail->Subject = 'Contact form: ' . $subject;
        $mail->Body = "Contact form submission\n\n" . $query;
        if (!$mail->send()) {
            $msg .= "Mailer Error: " . $mail->ErrorInfo;
        } else {
            $msg .= "Message sent!";
        }
    }
} ?>