const mongoose=require("mongoose")
const {Schema}=mongoose;

const eventSchema=new mongoose.Schema({
    event:{type:String, required:true},
    date:String
},{timestamps:true
}
);

const Events=mongoose.model("Events",eventSchema);

module.exports=Events;