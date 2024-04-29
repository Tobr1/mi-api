const mongoose = require('mongoose');
const dbconnect=async () =>{
    mongoose.set('strictQuery',true);
    try{
        await mongoose.connect ("mongodb://127.0.0.1:27017/autos_de_lujo");
        console.log ("Conexion correcta");
    }
    catch(error){
        console.error("Error de conexion",error);
    }
    }
    module.exports=dbconnect;