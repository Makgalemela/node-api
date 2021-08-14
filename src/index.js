const express = require('express')
require('dotenv').config();

const app = express();

app.listen(process.env.Port , '0.0.0.0', ()=> {
    console.log(process.env.Port)
})
