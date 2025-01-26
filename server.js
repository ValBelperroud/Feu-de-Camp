const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Servir les fichiers statiques depuis _site
app.use(express.static('_site'));

// Route pour toutes les requêtes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '_site', 'index.html'));
});

// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`Application démarrée sur le port ${port}`);
}); 