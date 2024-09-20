// script.js

document
  .getElementById("playPauseButton")
  .addEventListener("click", function () {
    var video = document.getElementById("myVideo");
    if (video.paused) {
      video.play();
      this.textContent = "Pause"; // Change le texte du bouton en "Pause"
    } else {
      video.pause();
      this.textContent = "Lire"; // Change le texte du bouton en "Lire"
    }
  });


    // Fonction pour gérer l'affichage/masquage des éléments
  document.querySelectorAll('.toggle-title').forEach(function (title) {
    title.addEventListener('click', function () {
      const target = document.querySelector(this.getAttribute('data-target'));

      // Alterner entre afficher et cacher
      if (target.style.display === "none" || target.style.display === "") {
        target.style.display = "block";
      } else {
        target.style.display = "none";
      }
    });
        });

// Fonction pour vérifier si l'élément est visible dans la fenêtre
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter la classe visible si l'élément est dans la fenêtre
function checkVisibility() {
  const elements = document.querySelectorAll('.hidden');

  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('visible'); // Ajouter la classe qui déclenche l'animation
    }
  });
}

// Vérifie la visibilité lors du défilement
window.addEventListener('scroll', checkVisibility);

// Appelle la fonction au chargement de la page pour vérifier les éléments déjà visibles
window.addEventListener('load', checkVisibility);

document.querySelectorAll('li').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
document.querySelectorAll('.custom-bullet li').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
