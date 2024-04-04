const express = require('express');
const routes = require('./routes/routes');
const app = express();
const port = 3001;



// Utilisation des routes définies dans routes.js
app.use('/', routes);


// Démarrage du serveur
app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}/`);
});
