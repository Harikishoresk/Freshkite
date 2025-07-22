import api from "./api.js";

export async function addTask (task) {
    return await api.post("/task/add", task);
}

export async function getTasks () {
    return await api.get("/task/get");
}

export async function updateTask(id, task) {
    return await api.put(`/task/update/${id}`, task);
}

export async function deleteTask(id) {
    return await api.delete(`/task/delete/${id}`);
}