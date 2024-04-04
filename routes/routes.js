const express = require('express');
const router = express.Router();

// Définition de la route principale
router.get('/', (req, res) => {
    res.send('Successful request to server');
});

module.exports = router;