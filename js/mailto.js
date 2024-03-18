
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher le formulaire de soumettre normalement

        // Récupérer les valeurs du formulaire
        const nom = encodeURIComponent(document.getElementById('nom').value);
        const email = encodeURIComponent(document.getElementById('email').value);
        const objet = encodeURIComponent(document.getElementById('objet').value);
        const message = encodeURIComponent(document.getElementById('message').value);

        // Construire l'URL mailto avec les données du formulaire
        const mailtoUrl = `mailto:joyzogo.pro@gmail.com?subject=${objet}&body=Nom:%20${nom}%0DEmail:%20${email}%0DMessage:%20${message}`;

        // Ouvrir l'URL mailto dans une nouvelle fenêtre
        window.open(mailtoUrl, '_blank');
    });
});
