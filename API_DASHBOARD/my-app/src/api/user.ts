import type { UsersResponse } from "../types/user.types";
import { apiClient } from "./apiClient";

export async function fetchUsers(){
    return apiClient<UsersResponse>("/users");
}