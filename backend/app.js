var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors=require('cors');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var eventsRouter = require("./routes/events");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);


//Connexion BDD
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const dbName='EventCal';
const dbUrl=`mongodb://0.0.0.0:27017/EventCal`;

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
},
(err)=>{
    if (!err) console.log("MongoDB connected");
    else console.log("MongoDB unconnected" + err);
}
);

module.exports = app;
