const express = require("express");

const mongoose=require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://vivek:vivek@cluster0.9pguw.mongodb.net/pin?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
  console.log("MongoDb connected");
}).catch((err)=>
console.log(err)
);

const PORT=8080;

app.listen(PORT,()=>{
  console.log("server running")
})