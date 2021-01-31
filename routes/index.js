"use strict";
const { Router } = require("express");
const router = Router();
//routes
router.get('/test',(req, res) => {
    const data = {
        "name":"Juan",
        "lastname":"Juan",
    };
    res.json(data);
});

module.exports = router;