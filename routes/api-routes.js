const express = require('express');
const connection = require('../config/connection.js');
const router = express.Router();
const { allBurgers, eatBurger, addBurger, delBurger } = require("../controllers/burgers_controller");

router.get('/', allBurgers);

router.put('/devour/:id', eatBurger);

router.post('/add', addBurger);

router.delete('/delete/:id', delBurger);

module.exports = router;
