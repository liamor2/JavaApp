import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/routes.js';

const app = express();
const port = 3001;

app.use(express.json());



// Utilisation des routes définies dans routes.js
app.use('/', router);



// Démarrage du serveur
app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}/`);
});
