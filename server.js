const express = require('express');
const { creerListe } = require('./taches');

const app = express();
const liste = creerListe();

app.use(express.json());
app.use(express.static('public'));

app.get('/api/taches', (req, res) => res.json(liste.toutes()));

app.post('/api/taches', (req, res) => {
  try {
    res.status(201).json(liste.ajouter(req.body.texte));
  } catch (erreur) {
    res.status(400).json({ erreur: erreur.message });
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Mes Tâches sur http://localhost:${port}`));
}

module.exports = app;
