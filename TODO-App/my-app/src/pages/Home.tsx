import { useState } from "react";
import type { Todo,Todoveiw  } from "../types/todo";
import { useNavigate } from "react-router-dom";
import TodoList from "../Components/TodoList";

interface HomeProps{
    todos:Todo[],
    onToggle:(id:string)=>void,
}

const Home = ({todos,onToggle}:HomeProps) => {
    const navigate = useNavigate();

    const [view,setView] = useState<Todoveiw>("all");

    const completeTodos = todos.filter((t)=>t.completed).sort((a,b)=>a.createdAt - b.createdAt);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Todo List</h1>

          <button onClick={() => navigate("/create")} className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Todo
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button onClick={()=>setView(view==="all"?"completed":"all")} className="text-sm text-blue-600 underline">
          {
            view==="all"?"Completed Todos": "All Todos"
          }
        </button>
      </div>

      <div>
        {
          view === "all"?(<TodoList todos={todos} onToggle={onToggle}/>):<TodoList todos={completeTodos} onToggle={onToggle}/>
        }
      </div>
      
    </div>
  )
}

export default Home
