const express= require('express');
const dbconnect = require('./db');
const ModelUser = require('./autos');
const app= express();

const router=express.Router();

router.post("/",async(req,res) =>{
    const cuerpo=req.body;
    const respuesta=await ModelUser.create(cuerpo)
    res.send(respuesta)
})

router.get("/",async(req,res) =>{
    const respuesta= await ModelUser.find({})
    res.send(respuesta)
})

router.get("/:id",async(req,res) =>{
    const id=req.params.id;
    const buscar= await ModelUser.findById(id)
    res.send(buscar)
})

router.put("/:id",async(req,res) =>{
    const body= req.body;
    const id=req.params.id;
    const actualizar= await ModelUser.findOneAndUpdate({ _id: id }, body)
    res.send(actualizar)
})

router.delete("/:id",async(req,res) =>{
    const id=req.params.id;
    const eliminar= await ModelUser.deleteOne( { _id : id })
    res.send(eliminar)
})


app.use(express.json())
app.use(router)
app.listen(3001,() =>{
    console.log("el servidor esta activo");
})

 dbconnect();