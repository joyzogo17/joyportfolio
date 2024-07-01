//verif.js

function validerChamps() {
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var objet = document.getElementById('objet').value;
    var message = document.getElementById('message').value;

    var nomMessage = document.getElementById('nomMessage');
    var emailMessage = document.getElementById('emailMessage');
    var objetMessage = document.getElementById('objetMessage');
    var messageMessage = document.getElementById('messageMessage');
    var notification = document.getElementById('notification');

    nomMessage.classList.add('d-none');
    emailMessage.classList.add('d-none');
    objetMessage.classList.add('d-none');
    messageMessage.classList.add('d-none');

    var isValid = true;

    if (!nom) {
        nomMessage.classList.remove('d-none');
        isValid = false;
    }

    if (!email) {
        emailMessage.classList.remove('d-none');
        isValid = false;
    }

    if (!objet) {
        objetMessage.classList.remove('d-none');
        isValid = false;
    }

    if (!message) {
        messageMessage.classList.remove('d-none');
        isValid = false;
    }

    if (!isValid) {
        notification.classList.remove('d-none');
        notification.textContent = "Veuillez remplir tous les champs du formulaire.";
    } else {
        notification.classList.add('d-none');
    }

    return isValid;
}
