import express from "express";
import { getAllTask,updateTask,createTask,deleteTask } from "../controllers/taskcontroller.js";

const routes=express.Router();

routes.get("/",getAllTask);
routes.post("/",createTask);
routes.put("/:id",updateTask);
routes.delete("/:id",deleteTask);

export default routes;