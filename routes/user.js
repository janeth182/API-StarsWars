"use strict";
const { AsyncLocalStorage } = require("async_hooks");
const { Router, response } = require("express");
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {   
   const response = await fetch('https://swapi.py4e.com/api/');
   const users = await response.json();
   res.json(users);
});

module.exports = router;