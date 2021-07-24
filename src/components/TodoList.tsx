import type { Dispatch, SetStateAction, VFC } from "react";
import type { Todo } from "src/types";

import { TodoItem } from "./TodoItem";

type Props = {
  todosState: {
    todos: Todo[] | undefined;
    setTodos: Dispatch<SetStateAction<Todo[] | undefined>>;
  };
  accessToken: string;
};

export const TodoList: VFC<Props> = ({ todosState, accessToken }) => {
  return (
    <div>
      <div className="space-y-3">
        {todosState.todos?.map((todo) => (
          <TodoItem
            key={todo.uuid}
            todo={todo}
            setTodos={todosState.setTodos}
            accessToken={accessToken}
          />
        ))}
      </div>
    </div>
  );
};
