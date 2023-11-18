import axios from "axios";

export const handleRegister = async (data: any) => {
    return axios.post(
        "/auth/register",
        {
            name: data.name,
            email: data.email,
            number: data.number,
            password: data.password,
            password_repeat: data.password_repeat,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

export const handleLogin = async (data: any) => {
    return axios.post(
        "/auth/login",
        {
            email: data.email,
            password: data.password,
        },
        {
            headers: { "Content-Type": "application/json" },
        }
    );
};
