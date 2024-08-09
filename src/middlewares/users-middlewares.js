const userModel = require("../models/usersModel");

async function insertUserMiddleware(req, res, next){
    const { nome , email , senha}= req.body;

    if(!nome || !email || !senha){
        return res.status(400).send ("Dados inválidos");
    }

    if (senha.length < 6){
        return res.status(400).send("A senha deve conter pelo menos 6 caracteres")
    };

    if(!email.includes('@') || !email.includes('.')){
        return res.status(400).send("Email inválido");
    }

    next();


}

async function getUserByIdMiddleware (req, res, next){
    const {id} = req.params

    if(!id){
        return res.status(400).send("Usuário Não Encontrado")
    }

  next();
}

async function deleteUserByIdMiddleware(req, res, next){
    const {id} = req.params

    if(!id){
        return res.status(400).send("Dados incompletos")
    }
   
    const user = await userModel.getUserModelById(id)

    if(!user){
        return res.status(400).send("Usuário não encontrado")
    }

  next()

}






module.exports = {
    insertUserMiddleware,
    getUserByIdMiddleware,
    deleteUserByIdMiddleware
}
