<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifier si tous les champs sont renseignés
    if (!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['objet']) && !empty($_POST['message'])) {
        // Récupérer les valeurs du formulaire
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $objet = $_POST['objet'];
        $message = $_POST['message'];

        // Adresse e-mail de destination
        $to = 'joyzogo.pro@gmail.com';

        // Sujet de l'e-mail
        $subject = 'Nouveau message de ' . $nom;

        // Contenu de l'e-mail
        $content = 'De: ' . $nom . "\n";
        $content .= 'Email: ' . $email . "\n";
        $content .= 'Message: ' . $message;

        // En-têtes de l'e-mail
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        // Envoyer l'e-mail
        if (mail($to, $subject, $content, $headers)) {
            // Redirection après l'envoi du formulaire
            header('Location: confirmation.html');
            exit;
        } else {
            echo "Une erreur s'est produite lors de l'envoi du message.";
        }
    } else {
        echo "Tous les champs doivent être remplis.";
    }
} else {
    // Si la méthode HTTP n'est pas POST, redirigez vers la page de formulaire
    header('Location: contact.html');
}
?>
