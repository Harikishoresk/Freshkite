import api from '/api';

export async function addtodo (task) {
    return await api.post("/task/add", task);
}

export async function gettodo () {
    return await api.get("/task/get");
}

export async function updatetodo(id, task) {
    return await api.put(`/task/update/${id}`, task);
}

export async function deletetodo(id) {
    return await api.delete(`/task/delete/${id}`);
}