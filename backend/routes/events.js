const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const eventController=require('../controllers/event');

// Create RAW data array
const events = [];

router.get('/',eventController.findAll);

router.get('/:id',eventController.findOne);

router.put('/',eventController.addEvent);

router.delete('/:id',eventController.deleteOne);

router.post('/:id',eventController.modifyEvent);

module.exports=router;