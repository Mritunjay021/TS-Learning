import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos:Todo[],
    onToggle:(id:string)=>void,
};

const TodoList=({todos,onToggle}:TodoListProps)=>{
    
    const sortedTodos=[...todos].sort((a,b)=>{
        if(a.completed === b.completed){
            return 0;
        }
        else{
            return a.completed?1:-1;
        }
    })
    
    return(
        <div className="mt-4">
            {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
        />
      ))}
        </div>
    )
};

export default TodoList;