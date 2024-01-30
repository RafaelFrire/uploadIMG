const express = require('express')
const router = express.Router()


var upload = require('../config/configMulter')


router.post('/photos/upload', upload.single(), (req, res) =>{
    res.write('POST FUNCIONANDO')
    res.end()
})


module.exports = router