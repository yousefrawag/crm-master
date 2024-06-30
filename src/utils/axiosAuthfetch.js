import axios from "axios";

const authFetch = axios.create({
    baseURL:"",
    

})

authFetch.interceptors.request.use((request) => {
    request.headers.Accept = 'application/json'
    request.headers["Content-Type"] = 'application/json'
    request.withCredentials = true
    
    console.log("request send");
    console.log(request);
    return request
} , (error) => {
    console.log(error);
    return Promise.reject(error)
})
authFetch.interceptors.response.use((respones) => {
    console.log(respones);
    return respones
} , (error) => {
    console.log(error);
    return Promise.reject(error)
})
export default authFetch