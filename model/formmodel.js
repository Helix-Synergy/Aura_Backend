const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  industry:{type:String,required:true},
  serviceofinterest: {
    type: String,
    enum: [
      "Management & Strategy Consulting",
      "Operations Consulting",
      "Financial Advisory Consulting",
      "Human Resources (HR) Consulting",
      "Marketing & Sales Consulting",
      "Specialized Consulting Services"
    ],
    required: true
  },
  message: { type: String, required: true }
});

const formModel = mongoose.model("AuraConsultationForm", FormSchema);

module.exports =  formModel ;
