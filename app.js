import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express();
const port = 3001 || process.env.PORT;

app.get('/',(req,res)=>{
    res.send('is work in 3001/3002')
})

app.listen(port,()=>{
    console.log(`server in ${port}`)
})