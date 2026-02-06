const express=require("express");
const app=express();
const cors=require("cors")
const router=require("./router/formrouter")
const dotenv=require("dotenv");
dotenv.config();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connecton DB
const ConnectionDB=require("./config/db");
ConnectionDB();
// api's
app.use(cors());
app.use("/form",router)
app.listen(process.env.PORT,()=>{console.log("The server is running")})