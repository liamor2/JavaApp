import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();
const port = 42424;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Story API',
            version: '1.0.0',
            description: 'A simple API to generate stories',
        },
    },
    apis: ['./routes/routes.js'], // path to where your route handlers are
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use(express.json());

// Utilisation des routes définies dans routes.js
app.use('/', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// Démarrage du serveur
app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}/`);
});
