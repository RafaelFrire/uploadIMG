const express = require('express')


const app = express()
const PORT = 3000


const uploadRoutes = require('./routers/upload')




app.use(uploadRoutes)


app.get('/', (req, res) =>{
    res.write("Hello World!")
    res.end()
})
app.listen(PORT, () =>{
    console.log("server rodando")
})
