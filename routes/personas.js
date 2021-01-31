"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const { Router, response } = require("express");
const router = Router();
const _ = require('underscore');

const fetch = require('node-fetch');

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const url = 'https://swapi.py4e.com/api/people/'+ id +'/';
   const response = await fetch(url);
   const personas = await response.json();
   
   const newPersona = { 
       nombre : personas.name,
       alto : personas.height,
       masa : personas.mass,
       color_pelo : personas.hair_color,
       color_ojos : personas.eye_color,
       anio_nacimiento : personas.birth_year,
       genero : personas.gender,
       mundo_natal : personas.homeworld,
       peliculas : personas.films,
       especies : personas.species,
       vehiculo : personas.vehicles,
       nave_estelar : personas.starships,
       creado : personas.created,
       editado : personas.created,
       url : personas.url       
   }; 
      
    res.json(newPersona);
});

module.exports = router;