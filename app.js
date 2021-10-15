
require('dotenv').config() 

const express = require('express');
const app = express();

const db = require('./database/db')

app.set('view engine', 'ejs')

app.use( express.urlencoded( {extended:true} ))
app.use( express.json() )

app.use( express.static ('public') )

const videos = require ('./routes/rutas')

app.use( videos )

app.listen (3000, () => {
    console.log('Servidor online en el puerto http://localhost:3000/');
})