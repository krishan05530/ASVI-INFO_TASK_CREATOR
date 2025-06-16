import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from './routes/taskRoutes.js';
dotenv.config();

const app= express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors({
    origin: process.env.BASE_URL,
    credentials:true,
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization']
}))

app.use("/tasks",taskRoutes);
const port= process.env.PORT ||4000;

app.get("/",(req,res)=>{
    res.send("backend on")
})


app.listen(process.env.PORT,()=>{
    console.log(`listing on port  ${port}`);
})


