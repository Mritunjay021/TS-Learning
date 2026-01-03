import { useState } from "react";
import { loginApi } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await loginApi({username,password});

        if(res.status === "success"){
            localStorage.setItem("token",res.data.token);
            navigate("/");
        }
        if(res.status === "error"){
            setError(res.error);
        }
    }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow w-80">
            <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>

            <input type="text" value={username} placeholder="UserName" className="border p-2 w-full mb-3" onChange={(e)=>setUsername(e.target.value)} />

            <input type="password" value={password} placeholder="Password" className="border p-2 w-full mb-4" onChange={(e)=>setPassword(e.target.value)} />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button onClick={handleLogin} className="bg-blue-600 text-white w-full py-2 rounded mt-2">Login</button>

        </div>
      
    </div>
  )
}

export default Login
