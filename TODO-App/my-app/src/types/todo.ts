export interface Todo {
    id:string;
    title:string;
    details:string;
    completed:boolean;
    createdAt:number;
}

export type CreateTodoInput = Omit<Todo,"id"|"completed" | "createdAt">;

export type Todoveiw = "all" | "completed";