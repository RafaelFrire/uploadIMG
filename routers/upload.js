const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')
const configMulter = require('../config/UploadConfig')

const formPath = path.resolve(__dirname, '../view/form.html')

const uploadImage = multer({storage:configMulter})


router.post('/photos/upload', uploadImage.single('photo'), (req, res) =>{
    res.sendFile(formPath)

})

router.get('/photos', (req, res) =>{
    res.send("sucesso")
    res.end()
 
})





module.exports = router