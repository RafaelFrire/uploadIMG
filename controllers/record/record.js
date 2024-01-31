const multer = require('multer')
const configMulter = require('../../config/UploadConfig')


const uploadImage = multer({storage:configMulter})


module.exports = {
    uploadImage
}