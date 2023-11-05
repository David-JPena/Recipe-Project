const express = require('express');

const index = express();

// configuración express

index.use(express.json());
index.use(express.urlencoded({extended: true}));
index.get('/',(req, res)=> {
    res.send('todo ok amigos!');
});

module.exports = index;