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
      uuid: "todo1",
      title: "todo1",
      isDone: false,
      createdAt: new Date(),
    },
    {
      uuid: "todo2",
      title: "todo2",
      isDone: false,
      createdAt: new Date(),
    },
    {
      uuid: "todo3",
      title: "todo3",
      isDone: false,
      createdAt: new Date(),
    },
  ];

  return (
    <div>
      <h1 className="text-xl text-center text-white">Hello, {user.name} :)</h1>
      <div className="mt-8">
        <TodoForm />
        <div className="mt-6">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};
