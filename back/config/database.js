const mongoose=require("mongoose");

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_LOCAL_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(con => {
//         console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
//     }).catch(con => {
//         console.log(`No se logro la conexion con la base de datos`) 
//     })
// }
// module.exports=connectDatabase;

const connectDatabase = async() => {
    try {
        const con = await mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Base de datos mongo conectada con el servidor localhost: ${con.connection.host}`);
    } catch (error) {
        console.log({
            mensajedeerror : error
        });
    }
}
module.exports=connectDatabase;