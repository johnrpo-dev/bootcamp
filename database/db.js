const mongoose = require('mongoose');

const url = process.env.BASEDATOS

mongoose.connect(url, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error',console.error.bind( console, 'Error al conectar a la DB' ))
db.once('open', function callback() {
    console.log('Conectado a MongoDB');
})

module.exports = db