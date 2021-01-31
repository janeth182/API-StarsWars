"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const { Router, response } = require("express");
const router = Router();
const _ = require('underscore');

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
   const { id } = req.params;
   const url = 'https://swapi.py4e.com/api/';
   const response = await fetch(url);
   const recursos = await response.json();
   
   const newRecursos = { 
       peliculas : recursos.films,
       personas : recursos.people,
       planetas : recursos.planets,
       especies : recursos.species,
       naves_estelares : recursos.starships,
       vehiculos : recursos.vehicles
   }; 
      
    res.json(newRecursos);
});

module.exports = router;