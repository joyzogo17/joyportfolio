<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];

    // Adresse e-mail de destination
    $to = 'zogoabaga.joybjr@gmail.com';

    // Sujet de l'e-mail
    $subject = 'Nouveau message de ' . $prenom . ' ' . $nom;

    // Contenu de l'e-mail
    $content = 'De: ' . $prenom . ' ' . $nom . "\n";
    $content .= 'Email: ' . $email . "\n";
    $content .= 'Message: ' . $message;

    // En-têtes de l'e-mail
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Envoyer l'e-mail
    mail($to, $subject, $content, $headers);

    // Redirection après l'envoi du formulaire
    header('Location: confirmation.html');
} else {
    // Si la méthode HTTP n'est pas POST, redirigez vers la page de formulaire
    header('Location: contact.html');
}
?>
