// mail.config.js

document.getElementById('validerButton').addEventListener('click', function() {
    if (!validerChamps()) {
        return;
    }
    var choix = confirm("Souhaitez-vous envoyer le message via Gmail ?");
    if (choix) {
        envoyerViaGmail();
    } else {
        envoyerParDefaut();
    }
});
