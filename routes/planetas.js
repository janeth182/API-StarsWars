"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const { Router, response } = require("express");
const router = Router();
const _ = require('underscore');

const fetch = require('node-fetch');

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const url = 'https://swapi.py4e.com/api/planets/'+ id +'/';
   const response = await fetch(url);
   const planetas = await response.json();
   
   const newPlanetas = { 
       nombre : planetas.name,
       periodo_rotacion : planetas.rotation_period,
       periodo_orbital : planetas.orbital_period, 
       diametro : planetas.diameter,
       gravedad : planetas.gravity,
       terreno : planetas.terrain,
       superficie_agua : planetas.surface_water,
       poblacion : planetas.population,
       residentes : planetas.residents,
       peliculas : planetas.films,
       creado : planetas.created,
       editado : planetas.edited,
       url : planetas.url
   }; 
      
    res.json(newPlanetas);
});

module.exports = router;