/* import React from 'react'

const Todoform = () => {
  return (
    <div>
        <h1>Enter your Todo</h1><br />
        <form>
            <label htmlFor="description">Description: </label>
                <textarea name="description" id="description"></textarea><br />
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
                <option value="Assigned">Assigned</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
        </form>
        <button>Add Todo</button>
    </div>
  )
}

export default Todoform */


import { useEffect, useState } from "react";

export const Todoform = ({ onAddTodo, etask }) => {
  const [todo, setDescription] = useState(etask?.todo ?? '');
  const [status, setStatus] = useState(etask?.status ?? "assigned");

  useEffect(() => {
    setDescription(etask?.todo ?? '');
    setStatus(etask?.status ?? 'assigned');
  }, [etask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Description cannot be empty!");
      return;
    }
    onAddTodo({ todo, status });
    setDescription("");
    setStatus("assigned");
  };

  return (
    <div className="h-[350px] w-[250px] bg-white">
      <h2 className="text-2xl text-center font-bold text-gray-800">{etask ? "Edit Todo" :"Add Todo"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={todo}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 "
            placeholder="Enter your task description..."
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="status"
            className="text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 "
          >
            <option value="assigned">Assigned</option>
            <option value="started">Started</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 "
        >
          {etask ? "Edit Todo" :"Add Todo"}
        </button>
      </form>
    </div>
  );
};