// Fonction pour gérer la soumission du formulaire
function handleFormSubmit(event) {
  event.preventDefault(); // Empêche l'envoi automatique du formulaire

  // Récupération des champs du formulaire
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Vérification des champs du formulaire
  if (!name || !email || !subject || !message) {
      alert("Veuillez remplir tous les champs.");
      return false;
  }

  // Si les champs sont remplis, afficher la boîte de dialogue de confirmation
  showConfirmationDialog("Voulez-vous vraiment envoyer ce message ?");
}

// Fonction pour afficher une boîte de dialogue avec les boutons "Oui" et "Non"
function showConfirmationDialog(message) {
  // Création de la mini-fenêtre de confirmation
  var confirmationWindow = document.createElement('div');
  confirmationWindow.setAttribute('id', 'confirmationWindow');
  confirmationWindow.style.position = 'fixed';
  confirmationWindow.style.top = '50%';
  confirmationWindow.style.left = '50%';
  confirmationWindow.style.transform = 'translate(-50%, -50%)';
  confirmationWindow.style.padding = '20px';
  confirmationWindow.style.backgroundColor = '#f1f1f1';
  confirmationWindow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  confirmationWindow.style.zIndex = '9999';
  confirmationWindow.style.textAlign = 'center';
  confirmationWindow.style.width = '300px';
  confirmationWindow.style.borderRadius = '10px';

  // Ajout du message
  var messageText = document.createElement('p');
  messageText.textContent = message;
  confirmationWindow.appendChild(messageText);

  // Bouton Oui
  var yesButton = document.createElement('button');
  yesButton.textContent = 'Oui';
  yesButton.style.margin = '10px';
  yesButton.style.padding = '10px 20px';
  yesButton.style.backgroundColor = '#007bff';
  yesButton.style.color = '#fff';
  yesButton.style.border = 'none';
  yesButton.style.borderRadius = '5px';
  yesButton.style.cursor = 'pointer';

  // Bouton Non
  var noButton = document.createElement('button');
  noButton.textContent = 'Non';
  noButton.style.margin = '10px';
  noButton.style.padding = '10px 20px';
  noButton.style.backgroundColor = '#dc3545';
  noButton.style.color = '#fff';
  noButton.style.border = 'none';
  noButton.style.borderRadius = '5px';
  noButton.style.cursor = 'pointer';

  // Ajout des événements aux boutons
  yesButton.addEventListener('click', function () {
      // Si l'utilisateur clique sur Oui, envoyer le formulaire
      sendForm();
      document.body.removeChild(confirmationWindow); // Fermer la fenêtre de confirmation
  });

  noButton.addEventListener('click', function () {
      // Si l'utilisateur clique sur Non, fermer la fenêtre de confirmation
      document.body.removeChild(confirmationWindow);
  });

  confirmationWindow.appendChild(yesButton);
  confirmationWindow.appendChild(noButton);
  document.body.appendChild(confirmationWindow);
}

// Fonction pour envoyer le formulaire via AJAX
function sendForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "assets/php/contact.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
      if (xhr.status === 200) {
          // Si le message est envoyé avec succès, afficher une nouvelle boîte de dialogue de confirmation
          showConfirmationDialogAfterSend("Votre message a bien été envoyé. Merci de nous avoir contactés !");
      } else {
          // Si une erreur se produit, afficher une alerte
          alert("Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer plus tard.");
      }
  };

  // Données du formulaire à envoyer
  var formData = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;
  xhr.send(formData);
}

// Fonction pour afficher la confirmation d'envoi avec un bouton OK
function showConfirmationDialogAfterSend(message) {
  // Création de la mini-fenêtre de confirmation
  var confirmationWindow = document.createElement('div');
  confirmationWindow.setAttribute('id', 'confirmationWindow');
  confirmationWindow.style.position = 'fixed';
  confirmationWindow.style.top = '50%';
  confirmationWindow.style.left = '50%';
  confirmationWindow.style.transform = 'translate(-50%, -50%)';
  confirmationWindow.style.padding = '20px';
  confirmationWindow.style.backgroundColor = '#f1f1f1';
  confirmationWindow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  confirmationWindow.style.zIndex = '9999';
  confirmationWindow.style.textAlign = 'center';
  confirmationWindow.style.width = '300px';
  confirmationWindow.style.borderRadius = '10px';

  // Ajout du message
  var messageText = document.createElement('p');
  messageText.textContent = message;
  confirmationWindow.appendChild(messageText);

  // Bouton OK pour fermer la fenêtre et réinitialiser le formulaire
  var okButton = document.createElement('button');
  okButton.textContent = 'OK';
  okButton.style.marginTop = '20px';
  okButton.style.padding = '10px 20px';
  okButton.style.backgroundColor = '#007bff';
  okButton.style.color = '#fff';
  okButton.style.border = 'none';
  okButton.style.borderRadius = '5px';
  okButton.style.cursor = 'pointer';

  // Ajout d'un événement au bouton OK
  okButton.addEventListener('click', function () {
      document.body.removeChild(confirmationWindow); // Fermer la boîte de dialogue
      document.getElementById('contactForm').reset(); // Vider le formulaire
  });

  confirmationWindow.appendChild(okButton);
  document.body.appendChild(confirmationWindow);
}
