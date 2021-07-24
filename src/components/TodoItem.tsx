import type { Dispatch, SetStateAction, VFC } from "react";
import { useState } from "react";
import { apiPath, fetcher } from "src/lib/fetcher";
import type { Todo } from "src/types";

type Props = {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[] | undefined>>;
  accessToken: string;
};

export const TodoItem: VFC<Props> = ({ todo, setTodos, accessToken }) => {
  const [isDone, setIsDone] = useState(todo.isDone);

  const handleUpdateTodo = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.todos.url(todo.uuid), {
        method: "PATCH",
        body: { title: todo.title, isDone: !isDone },
        accessToken,
      });
      const data = await res.json();
      if (!data.ok) return;

      setIsDone((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTodo = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.todos.url(todo.uuid), {
        method: "DELETE",
        accessToken,
      });
      const data = await res.json();
      if (!data.ok) return;

      // deleted todo
      setTodos(
        (prev) => prev && prev.filter((item) => item.uuid !== todo.uuid)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="
        p-3 text-white bg-gray-500 rounded 
        border border-gray-500 flex justify-between
      "
    >
      <div className="flex items-center">
        <input
          className="mr-3 w-4 h-4"
          type="checkbox"
          checked={isDone}
          onChange={handleUpdateTodo}
        />
        <p>{todo.title}</p>
      </div>
      <div>
        <button className="font-bold text-black" onClick={handleDeleteTodo}>
          [x]
        </button>
      </div>
    </div>
  );
};
