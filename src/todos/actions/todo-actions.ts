"use server";

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";



export const sleep = async (seconds : number = 0) =>{
return new Promise((resolve) =>{
  setTimeout(() =>{
    resolve(true);
  }, seconds * 1000);
})
}
export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {

  await sleep(3); // Simulate a delay for demonstration purposes
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw new Error(`todo with id ${id} not found`);
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { completed: complete },
  });

  revalidatePath("/dashboard/rest-todos");
  return updateTodo;
};

export const createTodo = async (description: string, userId : string) => {
  try {
    const todoInserted = await prisma.todo.create({
      data: {
        description,
       userId
      },
    });

    revalidatePath("/dashboard/rest-todos");
    return todoInserted;

  } catch (err) {
    console.log(err);
    return {
      message: "Error creating todo",
    };
  }
};


export const deleteCompletedAction = async () =>{
  try {
    const deletedTodos = await prisma.todo.deleteMany({
      where: { completed: true },
    });

    revalidatePath("/dashboard/rest-todos");
    return deletedTodos;
  } catch (error) {
    console.log(error);
    return {
      message: "Error deleting completed todos",
    }
  }
}