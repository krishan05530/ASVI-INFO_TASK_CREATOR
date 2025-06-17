
import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList';
import { toast } from 'react-toastify';
import TaskForm from './components/TaskForm'
import { endpoints } from './services/api';
import axios from 'axios';
import { useEffect } from 'react';
function App() {


  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);


  const fetchTasks = async () => {
    try {
      const res = await axios.get(endpoints.GETALL_TASK_API);

      setTasks(res.data);
    } catch (error) {

      console.log("Failed to fetch tasks", error);
    }
  }


  const handleAddOrUpdate = async (task) => {
    try {

      if (editingTask) {
        await axios.put(endpoints.UPDATE_TASK_API(editingTask.id), task)
        setEditingTask(null);
      } else {
        await axios.post(endpoints.CREATETASK_API, task)
      }
      fetchTasks();
    } catch (error) {
       toast.error(error.response.data.error);
      console.log("failed to submit tasks", error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(endpoints.DELETE_TASK_API(id));
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='w-11/12 sm:w-4/5 mx-auto  py-4 border-2 border-gray-400'>
      <div className=' px-2 sm:px-4 mt-4  '> 
  <h1 className='text-xl sm:text-3xl font-bold mb-4 text-left'>Add New Tasks</h1>
      <TaskForm
        onSubmit={handleAddOrUpdate}
        editingTask={editingTask}
        onCancel={() => setEditingTask(null)}
      />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} />
      </div>
      
    </div>
  )
}

export default App
