// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log("Système prêt : Le DOM est chargé.");

    // 1. Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Empêcher le rechargement par défaut de la page
            event.preventDefault();

            // Récupération des données (Logique de capture)
            const formData = new FormData(this);
            const name = formData.get('name');

            // Simulation d'un envoi (Architecture asynchrone)
            console.log(`Envoi du message pour : ${name}`);
            
            // Affichage du succès
            displaySuccessMessage(contactForm);
        });
    }
});

/**
 * Affiche un message de succès et réinitialise le formulaire
 * @param {HTMLElement} form - Le formulaire à traiter
 */
function displaySuccessMessage(form) {
    // Création d'un élément de message
    const successDiv = document.createElement('div');
    successDiv.style.backgroundColor = '#dcfce7';
    successDiv.style.color = '#166534';
    successDiv.style.padding = '1rem';
    successDiv.style.marginTop = '1rem';
    successDiv.style.borderRadius = '5px';
    successDiv.style.border = '1px solid #166534';
    successDiv.innerText = "Merci ! Votre message a bien été envoyé (simulation).";

    // Ajout au DOM
    form.appendChild(successDiv);

    // Réinitialisation des champs
    form.reset();

    // Disparition automatique après 5 secondes
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}



// Surligner le lien actif dans la navigation
const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.style.color = 'var(--primary-color)';
        link.style.borderBottom = '2px solid var(--primary-color)';
    }
});