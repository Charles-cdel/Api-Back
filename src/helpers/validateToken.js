const jwt = require ('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

async function validateToken(token){
    
    try {
        jwt.verify(token, jwtSecret);
        return true;
    } catch (err) {
        return false;
        
    }
}

module.exports = validateToken;