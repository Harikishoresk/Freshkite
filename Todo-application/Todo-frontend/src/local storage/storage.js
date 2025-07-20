export const gettoken = () => {
    localStorage.getItem('token');
};

export const settoken = (token) => {
    localStorage.setItem('token', token);
}

export const removetoken = () => {
    localStorage.removeItem('token');
}