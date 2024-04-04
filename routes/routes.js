import express from 'express';
const router = express.Router();
import { complexStoryRequest, simpleStoryRequest } from '../controllers/storyController.js';


// Définition de la route principale
router.get('/', (req, res) => {
    res.send('Successful request to server');
});

router.post('/api/complex', complexStoryRequest);
router.post('/api/simple', simpleStoryRequest);

export default router;