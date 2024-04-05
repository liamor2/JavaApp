import express from 'express';
const router = express.Router();
import { complexStoryRequest, simpleStoryRequest } from '../controllers/storyController.js';
import { speechToText } from '../controllers/ttsController.js';

// Définition de la route principale
router.get('/', (req, res) => {
    res.send('Successful request to server');
});

/**
 * @swagger
 * /api/complex:
 *   post:
 *     summary: Generates a complex story based on input parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               longueur:
 *                 type: string
 *               image:
 *                type: boolean
 *               ageCible:
 *                 type: string
 *               themeHistoire:
 *                 type: string
 *               persoP:
 *                 type: object
 *                 properties:
 *                   nom:
 *                     type: string
 *                   age:
 *                     type: number
 *                   personnalite:
 *                     type: string
 *                   genre:
 *                     type: string
 *               defi:
 *                 type: string
 *               morale:
 *                 type: string
 *               elementsSupp:
 *                 type: object
 *                 properties:
 *                   objets:
 *                     type: array
 *                     items:
 *                       type: string
 *                   rencontres:
 *                     type: array
 *                     items:
 *                       type: string
 *     responses:
 *       200:
 *         description: Successfully generated a complex story
 *       500:
 *         description: An error occurred
 */
router.post('/api/complex', complexStoryRequest);

/**
 * @swagger
 * /api/simple:
 *   post:
 *     summary: Generates a simple story based on input parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               longueur:
 *                 type: string
 *               image:
 *                type: boolean
 *               ageCible:
 *                 type: string
 *               themeHistoire:
 *                 type: string
 *               persoP:
 *                 type: object
 *                 properties:
 *                   nom:
 *                     type: string
 *                   age:
 *                     type: number
 *                   personnalite:
 *                     type: string
 *                   genre:
 *                     type: string
 *     responses:
 *       200:
 *         description: Successfully generated a simple story
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 story:
 *                   type: string
 *       500:
 *         description: An error occurred
 */


router.post('/api/simple', simpleStoryRequest);

/**
 * @swagger
 * /api/tts:
 *   post:
 *     summary: Converts text to speech
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               voiceID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully converted text to speech
 *       500:
 *         description: An error occurred
 */

router.post('/api/tts', speechToText);


export default router;