/* import React from 'react'

const todoitem = () => {
  return (
    <div>
        <div className='flex'>
            <section>

            </section>
        </div>
    </div>
  )
}

export default todoitem */

import { FaEdit, FaTrash } from "react-icons/fa";

export function Todoitem({ task, onEdit, onDelete }) {

    const statusColors = {
        assigned: "bg-yellow-200 text-yellow-800 ",
        started: "bg-blue-200 text-blue-800",
        completed: "bg-green-200 text-green-800",
    };

    return (
        <div className="flex items-center justify-between p-2 bg-gray-200  mb-4">
            <div className="flex text-lg font-semibold text-gray-800 ">
                {task.todo}
            </div>

            <select
                value={task.status}
                onChange={(e) => {
                    task.status = e.target.value; 
                    onEdit(task);
                }}
                className={`py-2 mx-4 rounded-lg font-semibold ${statusColors[task.status]} `}
            >
                <option value="assigned">Assigned</option>
                <option value="started">Started</option>
                <option value="completed">Completed</option>
            </select>


            <div className="flex space-x-4">

                <button
                    onClick={() => onEdit(task)}
                    className="p-2 rounded-lg text-blue-600"
                    aria-label="Edit Task"
                >
                    <FaEdit size={18} />
                </button>

                <button
                    onClick={() => onDelete(task._id)}
                    className="p-2 rounded-lg text-red-60 "
                    aria-label="Delete Task"
                >
                    <FaTrash size={18} />
                </button>
            </div>
        </div>
    );
}