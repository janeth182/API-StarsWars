"use strict";
const { Router, response } = require("express");
const router = Router();
const _ = require('underscore');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

//routes
router.get('/',(req, res) => {    
    const params = {
        TableName: 'Animales'        
    };
    dynamoDb.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
            res.json({Mensaje:"Error."});
        } else {
            res.json(data);
        }
    }
});

router.post('/',(req, res) => {    
    const {nombre, raza, tamanio, color, edad} = req.body;

    if (nombre && raza && tamanio && color && edad) {        
        const datetime = new Date().toISOString();   
        const params = {
            TableName: 'Animales',
            Item: {
                "id": "jv" + Math.floor(Date.now()),
                "nombre": nombre,
                "raza": raza,
                "tamanio" : tamanio,
                "color" : color,
                "edad" : edad,
                "fecha_creacion" : datetime,
                "fecha_actualizacion" : datetime
            }
        };

        dynamoDb.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                res.json({Mensaje:"Error."});
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
                res.json({Mensaje:"OK."});
            }
        });       
    } else {
        res.json({ Mensaje: "Error al momento de ingresar los datos."});
    }    
});

module.exports = router;