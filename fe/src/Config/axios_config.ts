import axios from 'axios';

const instance = axios.create({
    baseURL : import.meta.env.HOST_BE
});


export default instance
