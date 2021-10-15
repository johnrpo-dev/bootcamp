
const Video = require('../model/Video')

module.exports.mostrar = (req, res) => {
    Video.find( {}, (err, videos) => {
        if(err) {
            return res.status(500).json({
                message:'Error mostrando los videos'
            })
        }else{
            res.render('index', {videos:videos})
        }
    })
}


module.exports.crear = (req, res) => {
    const video = new Video ({
        nombre: req.body.nombre,
        url: req.body.url
    })
    video.save(function(err, video) {
        if(err) {
            return res.status(500).json({
                message:'Error creando el video'
            })
        }else{
            res.redirect('/')
        }
    })
    
}


