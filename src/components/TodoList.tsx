import type { VFC } from "react";
import type { Todo } from "src/types";

import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
};

export const TodoList: VFC<Props> = ({ todos }) => {
  return (
    <div>
      <div className="py-5 px-5 space-y-2 bg-gray-600 rounded">
        {todos?.map((todo) => (
          <TodoItem key={todo.todoId} todo={todo} />
        ))}
      </div>
    </div>
  );
};
