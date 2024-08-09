const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

async function login(req, res){

    const {id, email} = req.user;

    console.log(id,email)

    const token = jwt.sign({id, email}, jwtSecret, { expiresIn: '1h' });

    return res.send(token);
}

module.exports = {
    login
}