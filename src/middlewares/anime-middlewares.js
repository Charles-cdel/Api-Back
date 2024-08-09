
const animesModel = require('../models/animesModel')

 async function  middlewareGetAnimeById(req, res, next){

    const {id} = req.params;
    const anime = await animesModel.getAnimeByIdModel(id);

    if(!anime){
        return res.status (404).send("Anime não encontrado")
    }

    next();

}

async function middlewareInsertAnime(req, res, next){
    const {
        nome,
        ano,
        genero,
        imagem,
        sinopse
    } =req.body

    if
        (!nome || !ano || !genero || !imagem || !sinopse){
            return res.status(404).send("Dados incompletos");

    }
    const anime =  await animesModel.getAnimeByNameModel(nome);

    if(anime){
        return res.status(404).send("Anime já cadastrado");
    }
    next();
    
}

async function middlewareUpdateAnime(req, res , next){
    const {id} = req.params;
    const {episodios} = req.body

    if(!id || !episodios){
        return res.status(404).send("Dados incompletos");

    }
    const anime = await animesModel.getAnimeByIdModel(id);
    if(!anime){
        return res.status(404).send("Anime não encontrado")
    }

 next()
    
}

async function middlewaredeleteAnime(req , res, next){
    const {id} = req.params;

    if(!id){
        return res.status(400).send("Dados incompletos")
    }
    const anime = await animesModel.getAnimeByIdModel(id)

    if(!anime){
        return res.status (400).send("Anime deletado")
    }

    next();



}




module.exports = {
    middlewareGetAnimeById,
    middlewareInsertAnime,
    middlewareUpdateAnime,
    middlewaredeleteAnime
    
}