import api from "../lib/axios"
import { User } from "../types/types"


export const getUser=async()=>{

    const token=localStorage.getItem("auth_token")
    const {data}=await api<User>("/auth",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return(data)

}