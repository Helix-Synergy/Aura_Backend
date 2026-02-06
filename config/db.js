const mongoose =require("mongoose");
const dotenv=require("dotenv")
dotenv.config();
async function ConnectionDB(){
try {
const conn=await mongoose.connect(process.env.MONGODB_URL)
if(conn){
  console.log("Connected to the DataBase");
}
else{
    console.log("Not Connected to the DataBase");
}

} catch (error) {
    console.log(error);
}
}
module.exports=ConnectionDB