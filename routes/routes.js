import express from 'express';
const router = express.Router();
import { complexStoryRequest } from '../controllers/ApiController.js';


// Définition de la route principale
router.get('/', (req, res) => {
    res.send('Successful request to server');
});

router.post('/api/complex', complexStoryRequest);

export default router;