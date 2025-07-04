'use client';

import { Todo } from "@/generated/prisma";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { startTransition, useOptimistic } from "react";
interface Props {
  todo: Todo;
  togleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, togleTodo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompletedValue: boolean) => ({
      ...state,
      completed: newCompletedValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed));

      await togleTodo(todoOptimistic.id, !todoOptimistic.completed);

    } catch (error) {
      console.error("Error toggling todo:", error);
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed));
    }
  };

  return (
    <div
      className={
        todoOptimistic.completed ? styles.todoDone : styles.todoPending
      }
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <button
          /*    onClick={() => togleTodo(todoOptimistic.id, !todoOptimistic.completed)} */
          onClick={onToggleTodo}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:opacity-60 bg-blue-100
            ${todoOptimistic.completed ? "bg-blue-200" : "bg-red-200"}
            `}
        >
          {todoOptimistic.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </button>

        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
