"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const { Router, response } = require("express");
const router = Router();
const _ = require('underscore');

const fetch = require('node-fetch');

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const url = 'https://swapi.py4e.com/api/starships/'+ id +'/';
   const response = await fetch(url);
   const naves = await response.json();
   
   const newNaves = { 
       nombre : naves.name,
       modelo : naves.model,
       fabricante : naves.manufacturer,
       costo_en_credito : naves.cost_in_credits,
       longitud : naves.length,
       velocidad_max_atmosferica : naves.max_atmosphering_speed,
       tripulacion: naves.crew,
       pasajeros : naves.passengers,
       capacidad_carga : naves.cargo_capacity,
       consumibles : naves.consumables,
       calificacion_hiperimpulsor : naves.hyperdrive_rating,
       MGLT : naves.MGLT,
       clase_nave_estelar : naves.starship_class,
       pilotos : naves.starship_class,
       peliculas : naves.films,
       creado : naves.created,
       editado : naves.edited,
       url : naves.url
   }; 
      
    res.json(newNaves);
});

module.exports = router;