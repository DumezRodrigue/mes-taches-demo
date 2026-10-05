// Les tâches, gardées en mémoire. Testable sans base de données.
function creerListe() {
  const taches = [];
  return {
    toutes: () => [...taches],
    ajouter(texte) {
      const propre = String(texte ?? '').trim();
      if (!propre) throw new Error('Le texte de la tâche est vide');
      const tache = { id: taches.length + 1, texte: propre, faite: false };
      taches.push(tache);
      return tache;
    },
  };
}

module.exports = { creerListe };
