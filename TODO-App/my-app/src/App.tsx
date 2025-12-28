import { useState } from 'react'
import Home from './pages/Home'
import CreateTodo from './pages/CreateTodo'
import type { Todo } from './types/todo'
import { Route, Routes } from 'react-router-dom'
import "./App.css"

const App = () => { 

  const [todos,setTodos] = useState<Todo[]>([]);

  const handleCreateTodo = (todo:Todo)=>{
    setTodos((prev)=>[...prev,todo]);
  }

  const handleToggle=(id:string)=>{
    setTodos((prev)=>
      prev.map((todo)=>todo.id === id?{...todo,completed:!todo.completed}:todo)  
    )
  }

  return(
    <Routes>
    <Route path='/' element={<Home todos={todos} onToggle={handleToggle} />} />

    <Route path='/create' element={<CreateTodo onCreate={handleCreateTodo}/>}/>  
  </Routes>
  )
}

export default App
