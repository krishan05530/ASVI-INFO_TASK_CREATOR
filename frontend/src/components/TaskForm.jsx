import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TaskForm = ({onSubmit,editingTask,onCancel}) => {

   const[name, setName]=useState("");
   const [description,setDescription]=useState("");
   
   useEffect(()=>{
    if(editingTask)
    {
        setName(editingTask.name);
        setDescription(editingTask.description);
    }
    else{
        setName("");
        setDescription("");
    }
   },[editingTask]);


    const handleSubmit=(e)=>{
e.preventDefault();
// now i need to dispatcxh the data to the backend 
onSubmit({ name, description });
setName("");
setDescription("");

    }





  return (
   <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-full'>

<div className='flex  sm:flex-row sm:justify-between gap-4 w-full'>

   <input 
   type='text'
   placeholder='Task Name'
   value={name}
   onChange={(e)=>setName(e.target.value)}
   className='flex-1 px-1 sm:px-3  py-2 sm:py-2 rounded-md border  bg-white border-gray-400 border-rounded'>
   </input>


 <div className=''>
<button
type='submit'

className='  sm:px-4 px-3 mr-3  py-2 sm:py-2  bg-blue-600 text-white rounded'
>
{editingTask ? "Update" : "Add Task"} 
</button>
  {editingTask && <button type="button" onClick={onCancel} 
  className=' mt-1  sm:px-4 mr-2 px-3 py-2 sm:py-2  bg-gray-500 text-white rounded'
  
  >Cancel</button>}
 </div>

</div>

   <input
   type='text'
   placeholder='Descriptions'
   value={description}

   onChange={(e)=>setDescription(e.target.value)}
           className="w-full px-3 py-2 bg-white rounded border border-gray-400">
   </input>



   </form>
  )
}

export default TaskForm
