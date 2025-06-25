
import { Todo } from "@/generated/prisma";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
interface Props {
  todo: Todo;
  togleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}


export const TodoItem = ({ todo,togleTodo }: Props) => {
  
  return (
    <div className={todo.completed ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <button
        onClick={() => togleTodo(todo.id, !todo.completed)}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:opacity-60 bg-blue-100
            ${todo.completed ? "bg-blue-200" : "bg-red-200"}
            `}
        >
          {todo.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </button>

        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
