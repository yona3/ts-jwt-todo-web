import type { ChangeEventHandler, VFC } from "react";
import { useState } from "react";
import type { Todo } from "src/types";

type Props = {
  todo: Todo;
};

export const TodoItem: VFC<Props> = ({ todo }) => {
  const [isDone, setIsDone] = useState(todo.isDone);

  const handleChangeIsDone: ChangeEventHandler<HTMLInputElement> = () =>
    setIsDone((prev) => !prev);

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
          onChange={handleChangeIsDone}
        />
        <p>{todo.title}</p>
      </div>
      <div>
        <button className="text-red-700">[x]</button>
      </div>
    </div>
  );
};
