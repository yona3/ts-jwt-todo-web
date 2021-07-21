import type { VFC } from "react";
import type { Todo, User } from "src/types";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

type Props = {
  user: User;
};

export const Main: VFC<Props> = ({ user }) => {
  const todos: Todo[] = [
    {
      todoId: "todo1",
      title: "todo1",
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      todoId: "todo2",
      title: "todo2",
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      todoId: "todo3",
      title: "todo3",
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <div>
      <h1 className="text-xl text-center text-white">Hello, {user.name} :)</h1>
      <div className="mt-5">
        <TodoForm />
        <div className="mt-5">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};
