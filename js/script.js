
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

function toggleMobileMenu() {
    navLinks.classList.toggle('mobile-menu');
}

function closeMobileMenu() {
    if (navLinks.classList.contains('mobile-menu')) {
        navLinks.classList.remove('mobile-menu');
    }
}
// Gestion des clics sur le hamburger menu
menuHamburger.addEventListener('click', toggleMobileMenu);

// Gestion des clics sur les liens du menu
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Scroll animation
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.animated-button');

    scrollButton.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du bouton

        // Calcule la nouvelle position de défilement
        let newY = window.scrollY + window.innerHeight;

        // Anime le défilement
        window.scrollTo({
            top: newY,
            behavior: 'smooth'
        });
    });
});

// testimonial animation
const testimonialList = document.querySelector('.testimonial-list');
const show = () => testimonialList.classList.show

// Pour voir la position de  scrollY en temps réel dans la console
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
}, true);

window.addEventListener('scroll', () => {
    if (window.scrollY > 1700) {
        testimonialList.classList.add('show');
    }
});

// compteur animation client
function incrementClientCount() {
    const clientCount = document.getElementById('clientCount');
    let currentCount = parseInt(clientCount.textContent.match(/\d+/)[0]) || 0;

    // Boucle pour incrementer le compteur
    if (currentCount < 3000 && window.scrollY > 2400) {
        let intervalId = setInterval(() => {
            currentCount += 50;
            clientCount.textContent = `+${currentCount} clients satisfaits`;

            if (currentCount >= 3000) {
                clearInterval(intervalId);
            }
        }, 50); // Incrémentation toutes les 50ms
    }
}

// Déclencher l'animation lorsque l'utilisateur atteint la zone cible
window.addEventListener('scroll', incrementClientCount);

// Initialiser le compteur à 0 au chargement de la page
window.addEventListener('load', () => {
    document.getElementById('clientCount').textContent = '+0 clients satisfaits';
});


//------------------- page services-------------------------

// ajout du titre h2 avec animation
document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.intro');
    const container1 = document.querySelector('.container1');

    if (intro && container1) {
        const introVisible = () => {
            intro.classList.add('intro-visible');
        };

        const container1Visible = () => {
            container1.classList.add('container1-visible');
        };

        setTimeout(introVisible, 2000);
        setTimeout(container1Visible, 3000);
    }
});

// pop up info bulle
// hover info bulle sur "Transport"
document.addEventListener('DOMContentLoaded', function () {
    const transportElement = document.querySelector('.transport');
    const infoTransport = document.querySelector('.info-transport');

    if (transportElement && infoTransport) {
        transportElement.addEventListener('mouseover', function () {
            infoTransport.classList.add('info-transport-visible');
        });


        transportElement.addEventListener('mouseout', function () {
            infoTransport.classList.remove('info-transport-visible');
        });

        // hover info bulle sur "Hébergement"
        const hebergementElement = document.querySelector('.hebergement');
        const infoHebergement = document.querySelector('.info-hebergement');

        hebergementElement.addEventListener('mouseover', function () {
            infoHebergement.classList.add('info-hebergement-visible');
        });

        hebergementElement.addEventListener('mouseout', function () {
            infoHebergement.classList.remove('info-hebergement-visible');
        });

        //  hover info bulle sur "Activités"
        const activitesElement = document.querySelector('.activites');
        const infoActivites = document.querySelector('.info-activites');

        activitesElement.addEventListener('mouseover', function () {
            infoActivites.classList.add('info-activites-visible');
        });

        activitesElement.addEventListener('mouseout', function () {
            infoActivites.classList.remove('info-activites-visible');
        });
    }
});

