
const BASE_URL = import.meta.env.VITE_API_URL;
console.log("BASE URL",BASE_URL);
export const endpoints={
    CREATETASK_API:BASE_URL+"/tasks",
     GETALL_TASK_API:BASE_URL+"/tasks/",
    UPDATE_TASK_API: (id) => `${BASE_URL}/tasks/${id}`,
  DELETE_TASK_API: (id) => `${BASE_URL}/tasks/${id}`,
}