const animes = require('../mocks/listaAnimes');
const connection = require('./connection');

async function getAllAnimesModel (){
    const animes = await connection.query(
        'select * from animes'
    )
    return animes.rows
}

async function getAnimeByIdModel(id){
     const animes = await connection.query(
        `SELECT * FROM animes WHERE id = ${id}`
        
    )
    return animes.rows [0];
}

async function insertNovoAnimeModel(nome, ano, nota , genero , episodios , imagem ,sinopse){
    await connection.query(
        `INSERT INTO animes(nome, ano, nota , categoria_id , episodios , imagem ,sinopse) VALUES(
        '${nome}',
        ${ano},
        ${nota},
        '${genero}',
        ${episodios},
        '${imagem}',
        '${sinopse}'
        )`
    )

    return;

}

async function getAnimeByNameModel(nome){
    const anime = await connection.query(
        `SELECT * FROM animes WHERE nome LIKE '${nome}' `
    )
    return anime.rows[0];
}

async function AttAnimeModel(episodios,id){
    await connection.query(
        `   UPDATE animes SET episodios = ${episodios} WHERE id = ${id}`
    )
    return;
 
}

async function DeleteAnimeModel(id){
    await connection.query(
        
        `DELETE FROM animes WHERE id = ${id}`

    )

    return ;
}

module.exports = {
    getAllAnimesModel,
    getAnimeByIdModel,
    insertNovoAnimeModel,
    getAnimeByNameModel,
    AttAnimeModel,
    DeleteAnimeModel
    
}

