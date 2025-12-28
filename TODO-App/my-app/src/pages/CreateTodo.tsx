import React, { useState } from "react";
import type { CreateTodoInput , Todo } from "../types/todo";
import {useNavigate} from "react-router-dom";

interface CreateTodoProps{
    onCreate:(todo:Todo)=>void;
}

const CreateTodo = ({onCreate}:CreateTodoProps) =>{
    const navigate = useNavigate();

    const [formData,setFormData] = useState<CreateTodoInput>({
        title:"",
        details:"",
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();

        if(!formData.title.trim())  
            return alert("Title is required");

        const newTodo:Todo={
            id:new Date().toISOString(),
            title:formData.title,
            details:formData.details,
            completed:false,
            createdAt:Date.now(),
        }

        onCreate(newTodo);
        navigate("/");
    }

    return (
        <div>
            <h2>Create Todo</h2>
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}/>

                <textarea name="details" placeholder="description" value={formData.details} onChange={handleChange}/>

                <button type="submit">Create </button>
            </form>
        
        </div>
    )

}


export default CreateTodo;