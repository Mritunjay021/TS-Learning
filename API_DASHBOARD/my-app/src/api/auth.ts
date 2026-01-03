import { apiClient } from "./apiClient";

import type { LoginRequest,LoginResponse } from "../types/auth.types";

export async function loginApi(credentials:LoginRequest){
    return apiClient<LoginResponse>("/auth/login",{
        method:"POST",
        body: JSON.stringify(credentials),
    })
}