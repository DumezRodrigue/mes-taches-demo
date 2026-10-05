const test = require('node:test');
const assert = require('node:assert');
const { creerListe } = require('../taches');

test('ajoute une tâche', () => {
  const liste = creerListe();
  liste.ajouter('Acheter du pain');
  assert.strictEqual(liste.toutes().length, 1);
});

test('refuse un texte vide', () => {
  const liste = creerListe();
  assert.throws(() => liste.ajouter('   '));
});

test('garde deux ajouts dans l’ordre', () => {
  const liste = creerListe();
  liste.ajouter('Un');
  liste.ajouter('Deux');
  assert.deepStrictEqual(liste.toutes().map((t) => t.texte), ['Un', 'Deux']);
});
