const router = require("express").Router();

const Pin=require("../models/PIn");


//create pin
router.post("/",(req,res)=>{
const newPin= new Pin(req.body);
try {
  const savedPin=newPin.save();
  res.status(200).json(savedPin);
} catch (error) {
  res.status(500).json(error);
}

})