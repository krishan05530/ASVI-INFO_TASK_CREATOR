

// cretrasing the task controller 
let tasks = [];


let id = 1;
export const createTask = (req, res) => {
    try {
        const { name, description } = req.body;

        // verify 
        if (!name) {
            return res.status(400).json({
                
                error: "Task name is required"
            })
        }

        if (!description) {
            return res.status(400).json({
                error: "Task description is required"
            })
        }
        // create the task 
        const newtask = { id: id++, name, description };
        tasks.push(newtask);
        res.status(200).json({
            success: true,
            message:"create task succesfull",
            tasks
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while creating the task "
        })
    }
    // fetch the data frpom user 
}


export const updateTask = (req, res) => {
    try {

        // by default we get string in id
        const taskid = parseInt(req.params.id);
        const { name, description } = req.body;

        // use find method , it taks callback function and return the output
        const task = tasks.find(t => t.id === taskid)
        if(!task)
        {
            return res.status(404).json({
                error: "Task not found"
            })
        };
  
        // nullish coalescing operator
        //. if name is not null then assign task.name = name , otherwise assign task.name 
        task.name=name ?? task.name;
        task.description =description ?? task.description;

        res.status(200).json({
            success:true,
            message: " updated the task successfully",
            task
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "failed to  update the task "
        })
    }
    // fetch the data frpom user 
}


export const deleteTask=(req,res)=>{


    try{

  const taskId = parseInt(req.params.id);
 const index=tasks.findIndex(t => t.id===taskId);
   
if(index===-1)
{
    return res.status(404).jsopn({
        error:"Task not found to delete"
    })
}

// splice to delete the 1 value on  that index 
tasks.splice(index,1);

 res.status(200).json({
            success:true,
            message: " deletd the task successfully",
        
        })
    }
    catch(error)
    {
 return res.status(500).json({
      success: false,
      error: "An error occurred while deleting the task"
    });
    }
}

export const getAllTask=(req,res)=>{
    try{
 res.json(tasks);
    }
    catch(error)
    {
 res.status(500).json({ error: "not able to get all the  tasks" });
    }
}