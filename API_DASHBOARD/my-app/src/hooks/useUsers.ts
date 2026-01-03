import type { ApiState } from "../types/api.types";
import type {User} from "../types/user.types";

import { useState,useEffect } from "react";
import { fetchUsers } from "../api/user";

export function useUsers(){
    
    const [state,setState] = useState<ApiState<User[]> | null>(null);
    
    useEffect(() => {
    fetchUsers().then((res) => {
      if (res.status === "success") {
        setState({ status: "success", data: res.data.users });
      } else {
        setState(res);
      }
    });
  }, []);

    return state;
}