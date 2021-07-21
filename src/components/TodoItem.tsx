import type { VFC } from "react";
import { useState } from "react";
import type { Todo } from "src/types";

type Props = {
  todo: Todo;
};

export const TodoItem: VFC<Props> = ({ todo }) => {
  const [isDone, setIsDone] = useState(todo.isDone);

  const handleChangeIsDone = () => setIsDone((prev) => !prev);

  return (
    <div
      className="
        p-3 text-white bg-gray-700 rounded 
        border border-gray-600 flex justify-between
      "
    >
      <div className="flex items-center">
        <input
          className="mr-3 w-4 h-4"
          type="checkbox"
          checked={isDone}
          onClick={handleChangeIsDone}
        />
        <p>{todo.title}</p>
      </div>
      <div>
        <button className="text-red-700">[x]</button>
      </div>
    </div>
  );
};
