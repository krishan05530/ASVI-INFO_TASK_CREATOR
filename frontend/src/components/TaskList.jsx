import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
    if (!Array.isArray(tasks)) return <p>No tasks available.</p>;

    return (
        <div className="flex flex-col justify-end text-left">
            <h2 className="text-3xl font-semibold mb-4 mt-4">Task List</h2>
            <div className="flex flex-col ">
                {tasks.map((task) => (
                    <div key={task.id}
                    className="flex justify-between items-center p-4  rounded "
                    >
                        <div className="flex flex-col ">
                            <h3 className="font-medium">{task.name.charAt(0).toUpperCase()+ task.name.slice(1)}</h3>
                            <p className="text-sm text-gray-600 ">{task.description.charAt(0).toUpperCase() + task.description.slice(1)}</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <button onClick={() => onEdit(task)}
                                  className="px-3 py-1 bg-white border-2 border-gray-400 text-black rounded"
                                >Edit</button>
                        <button onClick={() => onDelete(task.id)}
                             className="px-3 py-1 border-2 border-gray-400 bg-white text-red-600 rounded"
                            >Delete</button>
                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TaskList;