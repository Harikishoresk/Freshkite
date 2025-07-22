import api from "./api";

export async function signin_ (data) {
    return await api.post("/auth/login", data);
}

export async function signup_ (data) {
    return await api.post("/auth/register", data);
}