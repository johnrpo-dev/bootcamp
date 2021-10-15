
const express = require('express')
const ruta = express.Router()

const videoController = require('../controllers/videoController')

ruta.get ('/', videoController.mostrar)

ruta.post ('/crear', videoController.crear)

module.exports = ruta


