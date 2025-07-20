import api from "./api";

export async function signin (data) {
    return await api.post("/auth/login", data);
}

export async function signup (data) {
    return await api.post("/auth/register", data);
}