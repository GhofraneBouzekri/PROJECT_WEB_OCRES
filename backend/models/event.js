const mongoose=require("mongoose")
const {Schema}=mongoose;

const eventSchema=new mongoose.Schema({
    event:String,
    date:String
},{timestamps:true
}
);

const Events=mongoose.model("Events",eventSchema);

module.exports=Events;