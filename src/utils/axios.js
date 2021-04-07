import axios from "axios";

const request = axios.create({
    baseURL : "http://localhost:8000/api"
})

export const userAPI = {
    register : (name, email, password, login_id) => {
        return request.post("/user/signin",{
            name : name,
            email,
            password,
            login_id
        })
    },
    login : (login_id, password) => {
        return request.post("/user/login",{
            login_id,
            password
        })
    },
    mypage : () => {
        return request.get("/user", {
            headers: {
                Authorization : localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export const solvedAPI = {
    post : (user_id, problem_id) => {
        return request.post("/solved", {
            user_id,
            problem_id,
            headers: {
                Authorization : localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            }
        })
    },
    get : () => {
        return request.get("/solved", {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        })
    }
}