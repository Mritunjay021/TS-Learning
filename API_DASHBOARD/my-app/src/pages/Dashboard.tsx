import { useUsers } from "../hooks/useUsers";
import {useState} from "react";


const Dashboard = () => {
    const usersState = useUsers();

    const [search,setSearch] = useState("");

    if(!usersState)
        return <p className="p-6">Loading...</p>;

    if (usersState.status !== "success") {
    return <p className="p-6 text-red-500">{usersState.error}</p>;
  }

  const filteredUsers = usersState.data?.filter((u) =>
    u.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4">Dashboard</div>
      
      <input type="text" placeholder="Search Users" onChange={(e)=>setSearch(e.target.value)}/>

      <div className="grid grid-cols-3 gap-4">
        {
            filteredUsers?.map((user)=>(
                <div key={user.id} className="border p-4 rounded shadow">
                    <h3>{user.firstName + " " + user.lastName}</h3>
                    <p>{user.email}</p>
                    <p className="text-sm text-gray-500">
                    {user.gender}, {user.age}
                    </p>
                </div>
            ))
        }

      </div>
    </div>
  )
}

export default Dashboard
