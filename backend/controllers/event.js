const mongoose=require('mongoose');
const axios=require('axios');

const Events=require('../models/event');
const events=require('../routes/events');

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
                message:`event ${id} not  found`
            });
        }
    })
    .catch(err=>{
        if (err.kind==='ObjectId'){
            return res.status(404).send({
                message:'event not found with id' + req.paramas.eventId
            });
        }
        return res.status(500).send({
            message:'Error retrieving event with id' + req.paramas.eventId
        });
    })
}

exports.addEvent=(req,res)=>{
    const {event}=req.body;
    const {date}=req.body;
    const id=_.uniqueId();
    events.push({id,event, date});
    req.json({
        message:`${event} just add it on ${date}`,
        event:{id,event,date}
    })
    .catch(err=>{
        if (err.kind==='ObjectId'){
            return res.status(404).send({
                message:'event not found with id' + req.paramas.eventId
            });
        }
        return res.status(500).send({
            message:'Error retrieving event with id' + req.paramas.eventId
        });
    })
}
exports.deleteOne=(req,res)=>{
    const {id}=req.params;
    _.remove(events,["id",id]);

    res.json({
        message:'Just removed ${id}'
    })
    .catch(err=>{
        if (err.kind==='ObjectId'){
            return res.status(404).send({
                message:'event not found with id' + req.paramas.eventId
            });
        }
        return res.status(500).send({
            message:'Error retrieving event with id' + req.paramas.eventId
        });
    })
}
exports.modifyEvent=(req,res)=>{
    const {event}=req.body;
    const {date}=req.body;
    const id=req.params;

    const eventToUpdate=_.find(events,["id",id]);

    eventToUpdate.event=event;

    res.json({
        message:'Just updated the event ${event}'
    })
    .catch(err=>{
        if (err.kind==='ObjectId'){
            return res.status(404).send({
                message:'event not found with id' + req.paramas.eventId
            });
        }
        return res.status(500).send({
            message:'Error retrieving event with id' + req.paramas.eventId
        });
    })
}