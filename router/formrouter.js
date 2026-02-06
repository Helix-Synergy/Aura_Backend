const express=require("express");
const {consultationform,getconsultationform}=require("../controller/formcontroller")
const router=express.Router()
router.post("/consultation",consultationform)
router.get("/getform",getconsultationform)
module.exports=router