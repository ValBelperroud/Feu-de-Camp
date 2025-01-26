const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Servir les fichiers statiques
app.use(express.static('_site'));

// Route spécifique pour l'admin TinaCMS
app.use('/admin', express.static(path.join(__dirname, '_site/admin')));

// Route pour toutes les autres requêtes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '_site', 'index.html'));
});

// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`Application démarrée sur le port ${port}`);
}); 