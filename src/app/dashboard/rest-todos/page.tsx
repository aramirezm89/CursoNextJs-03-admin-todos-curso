import prisma from "@/lib/prisma";
import { TodoForm, TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listado de todos',
 description: 'Listado de todos',
};
export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({orderBy:{cretedAt:'desc'}})
  return (
    <div>
      <TodoForm/>
      <TodosGrid todos={todos}/>
    </div>
  );
}