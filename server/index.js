import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from './routes/taskRoutes.js';
dotenv.config();

const app= express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// app.use(cors({
//     origin: process.env.BASE_URL,
//     credentials:true,
//     methods:['GET','POST','PUT','DELETE','OPTIONS'],
//     allowedHeaders:['Content-Type','Authorization']
// }))



// const allowedOrigins = [
//   'http://localhost:5173',
//   'https://asvi-info-task-creator-e6x3.vercel.app'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));


// app.use(cors({
//     origin: [
//         'http://localhost:5173', 
//         'https://asvi-info-task-crea-git-e04fda-krishan-kumars-projects-91e715cc.vercel.app',
//         'https://asvi-info-task-creator.vercel.app' // your main domain
//     ],
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));


app.use(cors({
    origin: [
        'https://asvi-info-task-creator-e6x3-3t4tg1xlp.vercel.app',
  'https://asvi-info-task-creator-e6x3.vercel.app',
  'https://asvi-info-task-crea-git-e04fda-krishan-kumars-projects-91e715cc.vercel.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));




app.use("/tasks",taskRoutes);
const port= process.env.PORT ||4000;

app.get("/",(req,res)=>{
    res.send("backend on")
})


app.listen(process.env.PORT,()=>{
    console.log(`listing on port  ${port}`);
})


