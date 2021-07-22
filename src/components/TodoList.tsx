import type { VFC } from "react";
import type { Todo } from "src/types";

import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
};

export const TodoList: VFC<Props> = ({ todos }) => {
  return (
    <div>
      <div className="space-y-3">
        {todos?.map((todo) => (
          <TodoItem key={todo.uuid} todo={todo} />
        ))}
      </div>
    </div>
  );
};
