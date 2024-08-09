const express = require('express');
const router = express.Router();
const animeController = require('../controller/anime-controller');
const  middlewareAnimes  = require('../middlewares/anime-middlewares');
const validateMiddleware = require('../middlewares/validate-middleware')

router.get('/animes' , animeController.getAllAnimes);
router.get('/animes/:id' ,middlewareAnimes.middlewareGetAnimeById , animeController.getAnimeById,);
router.post('/animes' ,validateMiddleware.validateTokenMiddleware,middlewareAnimes.middlewareInsertAnime, animeController.insertNovoAnime);
router.put('/animes/:id' ,middlewareAnimes.middlewareUpdateAnime, animeController.AttAnime);
router.delete('/animes/:id' ,middlewareAnimes.middlewaredeleteAnime, animeController.deleteAnime);

module.exports = router;
