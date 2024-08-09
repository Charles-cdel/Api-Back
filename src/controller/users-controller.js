const userModel = require('../models/usersModel');
const encryptPassword = require('../helpers/encryptPassword')
const decryptPassword = require('../helpers/decryptPassword')

async function createUser (req,res){

const {nome, email, senha}=req.body;

const pass = await encryptPassword(senha);
console.log(pass)
const decrypted = decryptPassword(pass);

console.log(decrypted);


try {
    await userModel.insertUsersModel(nome, email, pass);
} catch (error) {
    return res.status(400).send ("Email já cadastrado");

    
}



return res.status(201).send ("Usuário inserido com sucesso")

    
}

async function getUserById (req,res){

    const {id} = req.params

    try {
         var user = await userModel.getUserModelById(id)
        
    } catch (error) {
        return res
        .status(400)
        .send(error.message);
        
    }
return res.status(200).send(user)

}

async function deleteUserById(req,res){

    const {id} = req.params

    try {
         await userModel.deleteUserModelByid(id)
        
    } catch (error) {
        return res
        .status(400)
        .send(error.message);
        
    }
return res.status(200).send("Usuário deletado com sucesso");

}

module.exports={
    createUser,
    getUserById,
    deleteUserById
}