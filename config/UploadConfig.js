const multer = require('multer')
const path = require('path')

const uploadFolder = path.resolve(__dirname, '../public/photos')



const storage = multer.diskStorage({
    destination: uploadFolder,
    filename: (req, file, cb) =>{
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)+'.jpeg'
        return cb(null, file.fieldname+ '-' + filename)
    }
})

module.exports = storage