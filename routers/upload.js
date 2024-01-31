const express = require('express')
const multer = require('multer')
const router = express.Router()
const configMulter = require('../config/UploadConfig')


const uploadImage = multer({storage:configMulter})


router.post('/photos/upload', uploadImage.single('file'), (req, res) =>{
    res.status(200).send('SUCESSO!!!')
    res.end()
})

router.get('/photos/upload', (req, res) =>{
    fs.readFile(formUpload)
    res.end()
})


module.exports = router