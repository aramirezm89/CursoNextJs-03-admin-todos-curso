"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteCompleted } from "../helpers/todos";
import { useRouter } from "next/navigation";

export const TodoForm = () => {
  const router = useRouter();
  const [description, setDescription] = useState<string>("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (description.trim().length === 0) return;

    await createTodo(description);
    router.refresh();
  };

  const deleteCompletedTodos = async () => {
    await deleteCompleted();
    router.refresh();
  };
  return (
    <form className="flex w-full mx-auto " onSubmit={onSubmit}>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        className="w-6/12 pl-3  pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all cursor-pointer"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompletedTodos()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all cursor-pointer"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
