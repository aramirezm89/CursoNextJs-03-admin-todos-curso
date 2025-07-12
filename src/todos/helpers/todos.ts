import { Todo } from "@/generated/prisma";

export const updateTodo = async (
  id: string,
  complete: boolean
):Promise<Todo> => {

  console.log(id, complete);
  const body = { completed: complete };

  const dbTodo : Todo = await fetch(`/api/todos/${id}`, {
    body: JSON.stringify(body),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res => {
    return res.json();
  });


  return dbTodo;
};


export const createTodo = async (description:string,userId : string): Promise<Todo> =>{

  const body = { description,userId };

  const todo = await fetch("/api/todos",{
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res =>{
    return res.json();
  })

console.log(todo)
  return todo;
}

export const deleteCompleted = async () => {
  const deletedTodos = await fetch("/api/todos", {
    method: "DELETE",
  }).then(res => {
    return res.json();
  });

  return deletedTodos;
}