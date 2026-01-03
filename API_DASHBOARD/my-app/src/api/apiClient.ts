import type { ApiState } from "../types/api.types";

const BASE_URL = "https://dummyjson.com";

export async function apiClient<T>(
    endpoint:string,
    options:RequestInit = {}
): Promise<ApiState<T>> {
    try{

        const token = localStorage.getItem("token");

        const resp = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers:{
                "Content-Type":"application/json",
                ...(token && {Authorization: `Bearer ${token}`}),
                ...options.headers,
            },
        });

        if(!resp.ok){
            const err = await resp.json();
            return {status:"error", error: err.message || `HTTP Error: ${resp.status}`};
        }

        const data:T = await resp.json();

        return{
            status:"success",
            data: data,
        }
    }catch{
        return {
            status:"error", error: "Network error or server is unreachable",
        };
    }
}