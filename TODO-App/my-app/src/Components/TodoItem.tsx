import type { Todo } from '../types/todo'

interface TodoItemProps{
    todo:Todo,
    onToggle:(id:string)=>void;
};

const TodoItem = ({todo,onToggle}:TodoItemProps) => {
    return(
        <div className={`flex justify-between items-start p-4 border-b ${todo.completed?"opacity-60":""}`}>
            <div>
                <h3 className='text-lg font-semibold'>{todo.title}</h3>
                <p className='text-sm text-gray-600'>{todo.details}</p>
            </div>
            <button onClick={()=>onToggle(todo.id)} className={`px-3 py-1 rounded text-sm ${todo.completed?"bg-yellow-500 text-white":"bg-green-600 text-white"}`}>
                {todo.completed?"Undo":"Complete"}
            </button>
        </div>
    )
}

export default TodoItem;