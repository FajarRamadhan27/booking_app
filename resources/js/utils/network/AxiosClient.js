import axios from "axios";

const axiosClient = axios.create({
    baseURL: `http://booking_app.test/api/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        const { response } = error
        console.log("There is request error"+ response.status)
        return Promise.reject(error)
    }
)

export default axiosClient

