const mongoose=require('mongoose');
const axios=require('axios');

const Events=require('../models/event')

exports.findAll=(req,res)=>{
    Events.find({}).then((events)=>{
        res.status(200).json({events});
    })
}

exports.findOne=(req,res)=>{
    const {id}=req.params;
    Event.findOne({event:id})
    .then(event=>{
        if (event){
            res.status(200).json({
                message:'event found', event
            });
        }else{
            res.status(404).json({
                message:'event ${id} not  found'
            });
        }
    })
    .catch(err=>{
        if (err.kind==='ObjectId'){
            return res.status(404).send({
                message:'event not found with id' + req.params.eventId
            });
        }
        return res.status(500).send({
            message:'Error retrieving event with id' + req.params.eventId
        });
    })
}

exports.addEvent=(req,res)=>{}
    