import { isAxiosError } from "axios"
import api from "../lib/axios"
import { User } from "../types/types"


export const getUser=async()=>{

    try {
        const {data}=await api<User>("/auth")
        return(data)
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
   

}