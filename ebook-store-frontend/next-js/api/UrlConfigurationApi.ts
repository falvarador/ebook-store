import axios from "axios";

const UrlConfigurationApi = axios.create({
    baseURL:'http://localhost:5237/api'
})

export default UrlConfigurationApi;