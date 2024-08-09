const connection = require('./connection')

async function insertUsersModel(nome , email, senha){
    await connection.query (`INSERT INTO users (nome, email, senha) VALUES (
        '${nome}',
        '${email}',
        '${senha}'
        
        )`)
        return;
}

async function getUserModelById(id){
    const user = await connection.query(
        `SELECT id, nome, email FROM users WHERE id = ${id}`
        
    )
    return user.rows[0];

}

async function deleteUserModelByid(id){
    await connection.query(
       `DELETE FROM users WHERE id = ${id}`

    )
    return;
}

module.exports = {
    insertUsersModel,
    getUserModelById,
    deleteUserModelByid
}