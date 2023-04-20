const cases = document.querySelectorAll('.case');
const joueurX = 'X';
const joueurO = 'O';
let tour = joueurX;

// Les combinaisons gagnantes possibles pour le morpion
const combinaisonsGagnantes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function aGagne(joueur) {
  return combinaisonsGagnantes.some((combinaison) => {
    return combinaison.every((index) => {
      return cases[index].textContent === joueur;
    });
  });
}

function estEgalite() {
  return Array.from(cases).every((caseElement) => {
    return caseElement.textContent !== '';
  });
}

function finDeJeu(message) {
  setTimeout(() => {
    alert(message);
    cases.forEach((caseElement) => {
      caseElement.textContent = '';
    });
  }, 100);
}

cases.forEach((caseElement) => {
  caseElement.addEventListener('click', () => {
    if (!caseElement.textContent) {
      caseElement.textContent = tour;
      if (aGagne(tour)) {
        finDeJeu(`Le joueur ${tour} a gagné!`);
      } else if (estEgalite()) {
        finDeJeu("Égalité !");
      } else {
        tour = tour === joueurX ? joueurO : joueurX;
      }
    }
  });
});
