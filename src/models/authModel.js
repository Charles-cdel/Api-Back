const connection = require('./connection');

async function getUserByEmail(email){
    const user = await connection.query(`
        SELECT * FROM users WHERE email= '${email}'
        `);
        return user.rows[0];
}

module.exports= {
    getUserByEmail
}