import axios from 'axios'
import { ACCESS_TOKEN } from './constants'
import { configs } from 'eslint-plugin-react-refresh';

const api =axios.create({
    baseURL :import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization =`Bearer ${token}`
        }
        return config
    })
    (error)=>{}