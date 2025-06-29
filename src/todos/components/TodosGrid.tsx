"use client";

import { Todo } from "@/generated/prisma";
import { TodoItem } from "./TodoItem";
/* import * as api from "../helpers/todos"; 
import { useRouter } from "next/navigation"; */
import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}
export const TodosGrid = ({ todos = [] }: Props) => {
/*   const router = useRouter(); */

  // forma de llamar a la accion tradicional mediante el api que contruimos

/*   const toggleTodo = async (id: string, complete: boolean) => {
    const updateTodo = await api.updateTodo(id, complete);
    console.log(updateTodo);
    router.refresh();
  }; */

  //forma de hacer lo mismo que con el api pero con una server action de NEXT

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} togleTodo={toggleTodo} />
      ))}
    </div>
  );
};
