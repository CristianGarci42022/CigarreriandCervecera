const app=require("./app")
//ARCHIVO DE CONFIGURACION
const dotenv=require("dotenv");
dotenv.config({path: 'back/config/config.env'})

const inicio = app.listen(process.env.PORT, () =>{
    console.log(`server inicio en el puerto: ${process.env.PORT} en modo ${process.env.NODE_ENV}`)
})
