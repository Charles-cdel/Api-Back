const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = 4000;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
