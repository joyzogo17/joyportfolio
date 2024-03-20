// mail.config.js

function envoyerViaGmail() {
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var objet = document.getElementById('objet').value;
    var message = document.getElementById('message').value;

    if (!nom) {
        document.getElementById('nomMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('nomMessage').classList.add('d-none');
    }

    if (!email) {
        document.getElementById('emailMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('emailMessage').classList.add('d-none');
    }

    if (!objet) {
        document.getElementById('objetMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('objetMessage').classList.add('d-none');
    }

    if (!message) {
        document.getElementById('messageMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('messageMessage').classList.add('d-none');
    }

    // Si tous les champs sont remplis, envoyer l'email via Gmail
    var mailtoLink = 'mailto:joyzogo.pro@gmail.com?subject=' + encodeURIComponent(objet) + '&body=' + encodeURIComponent('Nom: ' + nom + '\nEmail: ' + email + '\nMessage: ' + message);
    
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent('joyzogo.pro@gmail.com') + '&su=' + encodeURIComponent(objet) + '&body=' + encodeURIComponent(message), '_blank');
}

function envoyerParDefaut() {
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var objet = document.getElementById('objet').value;
    var message = document.getElementById('message').value;

    if (!nom) {
        document.getElementById('nomMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('nomMessage').classList.add('d-none');
    }

    if (!email) {
        document.getElementById('emailMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('emailMessage').classList.add('d-none');
    }

    if (!objet) {
        document.getElementById('objetMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('objetMessage').classList.add('d-none');
    }

    if (!message) {
        document.getElementById('messageMessage').classList.remove('d-none');
        return;
    } else {
        document.getElementById('messageMessage').classList.add('d-none');
    }

    // Si tous les champs sont remplis, envoyer l'email via l'application par défaut
    var mailtoLink = 'mailto:joyzogo.pro@gmail.com?subject=' + encodeURIComponent(objet) + '&body=' + encodeURIComponent('Nom: ' + nom + '\nEmail: ' + email + '\nMessage: ' + message);
    
    window.location.href = mailtoLink;
}
