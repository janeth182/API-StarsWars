"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const { Router, response } = require("express");
const router = Router();
const _ = require('underscore');

const fetch = require('node-fetch');

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const url = 'https://swapi.py4e.com/api/films/'+ id +'/';
   const response = await fetch(url);
   const peliculas = await response.json();
   
   if(Object.keys(peliculas).length > 0){
    const newPeliculas = { 
        titulo : peliculas.title,
        episodio_id : peliculas.episode_id,
        rastreo_apertura : peliculas.opening_crawl,
        director : peliculas.director,
        productora : peliculas.producer,
        fecha_lanzamiento : peliculas.release_date,
        personajes : peliculas.characters,   
        planetas : peliculas.planets,
        naves : peliculas.starships,
        vehiculos : peliculas.vehicles,
        especies : peliculas.species,
        creado : peliculas.created,
        editado : peliculas.created,
        url : peliculas.url 
    }; 
       
     res.json(newPeliculas);
   } else {
    res.json({Mensaje:"No se encontro resultados."});
   }
});

module.exports = router;