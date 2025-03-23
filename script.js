// Effet de défilement fluide pour les liens du menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Effet d'apparition des sections au défilement
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Validation du formulaire de contact
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    let prenom = document.querySelector("input[name='prenom']").value.trim();
    let nom = document.querySelector("input[name='nom']").value.trim();
    let telephone = document.querySelector("input[name='telephone']").value.trim();
    let email = document.querySelector("input[name='email']").value.trim();
    let sujet = document.querySelector("input[name='sujet']").value.trim();
    let message = document.querySelector("textarea[name='message']").value.trim();

    if (prenom === "" || nom === "" || telephone === "" || email === "" || sujet === "" || message === "") {
        alert("Veuillez remplir tous les champs avant d'envoyer le message !");
        event.preventDefault(); // Empêche l'envoi du formulaire si un champ est vide
    } else if (!/^\d{8,15}$/.test(telephone)) {
        alert("Veuillez entrer un numéro de téléphone valide !");
        event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Veuillez entrer une adresse email valide !");
        event.preventDefault();
    }
});

