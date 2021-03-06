import type { Dispatch, SetStateAction, VFC } from "react";
import { apiPath, fetcher } from "src/lib/fetcher";
import type { Todo, User } from "src/types";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

type Props = {
  userState: {
    user: User;
    setUser: Dispatch<SetStateAction<User | undefined>>;
  };
  todosState: {
    todos: Todo[] | undefined;
    setTodos: Dispatch<SetStateAction<Todo[] | undefined>>;
  };
  accessTokenState: {
    accessToken: string;
    setAccessToken: Dispatch<SetStateAction<string>>;
  };
};

export const Main: VFC<Props> = ({
  userState,
  todosState,
  accessTokenState,
}) => {
  const handleLogout = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.token.url(), {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.ok) return;

      userState.setUser(undefined);
      accessTokenState.setAccessToken("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl text-center text-white">
        Hello, {userState.user.name} :)
      </h1>
      {todosState.todos ? (
        <div className="mt-8">
          <TodoForm
            accessToken={accessTokenState.accessToken}
            setTodos={todosState.setTodos}
          />
          <div className="mt-6">
            <TodoList
              todosState={todosState}
              accessToken={accessTokenState.accessToken}
            />
          </div>
        </div>
      ) : (
        <div className="text-center text-white">Loading...</div>
      )}
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
