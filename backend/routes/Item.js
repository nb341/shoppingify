const express = require('express');
const itemRouter = express.Router();
const {Sequelize} = require('sequelize');
const Items = require('../models/Item');
itemRouter.use(express.json());


itemRouter.get('/', async (req, res, next)=>{

    try{
        let items = await Items.findAll();
        if(!items){
            res.sendStatus(404);
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            console.log(items)
            res.json(items);
        }
    }catch(err){
        next(err);
    }
})


module.exports = itemRouter;