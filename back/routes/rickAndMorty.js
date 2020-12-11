const router = require("express").Router();

const rickAndMortyController = require('../controllers/episodes');

router.get('/', rickAndMortyController.getEpisodes);
router.post('/character', rickAndMortyController.getCharacter);

module.exports = router;