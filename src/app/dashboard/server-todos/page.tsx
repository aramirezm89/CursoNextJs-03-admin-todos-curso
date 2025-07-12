export const dynamic = "force-dynamic";
export const revalidate = 0; // Disable caching for this page

import { auth } from "@/app/auth";

// This page will always be rendered on the server, even if it is cached.

import prisma from "@/lib/prisma";
import { TodoForm, TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};
export default async function ServerTodosPage() {
  const session = await auth();
  console.log(session?.user);

  const todos = await prisma.todo.findMany({
    orderBy: { cretedAt: "desc" },
    where: { userId: session?.user.id ?? '' },
  });
  return (
    <>
      <div className="text-3xl mb-10">Server actions</div>
      <div>
        <TodoForm />
        <TodosGrid todos={todos} />
      </div>
    </>
  );
}
