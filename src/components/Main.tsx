import type { Dispatch, SetStateAction, VFC } from "react";
import { apiPath, fetcher } from "src/lib/fetcher";
import type { Todo, User } from "src/types";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

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

type Props = {
  userState: {
    user: User;
    setUser: Dispatch<SetStateAction<User | undefined>>;
  };
  setAccessToken: Dispatch<SetStateAction<string>>;
};

export const Main: VFC<Props> = ({ userState, setAccessToken }) => {
  const handleLogout = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.token.url(), {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.ok) return;

      userState.setUser(undefined);
      setAccessToken("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center text-white">
        Hello, {userState.user.name} :)
      </h1>
      <div className="mt-8">
        <TodoForm />
        <div className="mt-6">
          <TodoList todos={todos} />
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className="text-gray-400 hover:underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
