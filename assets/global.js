/* =========================================================
   QUIETTA — Global JS (vanilla, no external dependencies)
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  initStickyAtc();
  initSwatches();
});

/**
 * Affiche la barre d'ajout au panier collante (mobile) une fois que
 * le bouton ATC principal sort du viewport.
 */
function initStickyAtc() {
  const sticky = document.getElementById('qt-sticky-atc');
  const mainAtc = document.querySelector('.qt-product__atc');
  if (!sticky || !mainAtc) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        sticky.classList.toggle('is-visible', !entry.isIntersecting);
      });
    },
    { threshold: 0 }
  );

  observer.observe(mainAtc);
}

/**
 * Gère la sélection visuelle des options produit (couleur/taille/largeur).
 * Implémentation originale, sans dépendance externe.
 */
function initSwatches() {
  document.querySelectorAll('.qt-product__option').forEach(function (optionGroup) {
    const buttons = optionGroup.querySelectorAll('.qt-swatch');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
      });
    });
  });
}
