<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'joyzogo.pro@gmail.com';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";
    
    $body = "<h2>Contact Request</h2>
             <p><strong>Name:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Subject:</strong> $subject</p>
             <p><strong>Message:</strong><br>$message</p>";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'OK';
    } else {
        echo 'Error: Message not sent.';
    }
} else {
    echo 'Error: Invalid request method.';
}
?>
