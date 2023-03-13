const { Router } = require('express');
const {Videogame, Genero} = require("../db")
const axios = require('axios')
const {
   APIKEY
  } = process.env;
const controller = require("./controllers.js")  

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const url = `https://api.rawg.io/api/games?key=${APIKEY}`
const router = Router();


router.get("/videogames", async (req,res)=>{
    try {
        const {name} = req.query
        if(!name){
            let array = await controller.mergeAll()
            res.json(array)
        }else{
           const array = await controller.mergeAll()
           let respuesta = await controller.withQuery(array,name)
           res.status(201).json(respuesta)
        }   
    } catch (error) {
        res.status(404).json([{error: error.message}])
    }   
})
router.get("/videogame/:id", async(req,res)=>{
 try {
    const {id} = req.params
    let respuesta = await controller.videogameID(id)
   res.json(respuesta)
     
 } catch (error) {   
    res.status(400).json({error: error.message})
 }
})

router.post("/videogames", async (req,res)=>{
 const {name,description,released,rating,platforms, generos} = req.body
 const objeto ={name,description,released,rating,platforms, generos}
 try {
    let respuesta = await controller.postVideogames(objeto)
    res.json(respuesta)    
 } catch (error) {
    res.status(400).json({error: error.message})
 }
})
router.get("/genres", async(req,res)=>{
  try {
     let respuesta = await controller.getGenres()
    res.json(respuesta)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

})

// router.post("/post", async(req,res)=>{
//  const {description, name, released,rating,platforms} = req.body
//  const videojuego = await Videogame.create({description,name,released,rating,platforms})
//  res.json({hello: 234})

// })
// router.get("/bypk/:id", async (req,res)=>{
//     const {id} = req.params 
//     const bypk = await Videogame.findByPk(id)
//     res.json(bypk)
// })
// router.post("/postgenero", async(req,res)=>{
//     const {name} = req.body
//     const creandogenero = await Genero.create({name})
//     res.json({hello: 1234})
   
// })







// router.post("/ch", (req,resp)=>{
//     Videogame.create
// })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
