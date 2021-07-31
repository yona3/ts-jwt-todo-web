import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AuthForm } from "src/components/AuthForm";
import { Main } from "src/components/Main";
import { apiPath, fetcher } from "src/lib/fetcher";
import type { Todo, User } from "src/types";

import { Layout } from "../components/Layout";

const Index: NextPage = () => {
  const [user, setUser] = useState<User>();
  const [todos, setTodos] = useState<Todo[]>();
  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetchAccessToken = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.refreshToken.url(), {
        method: "POST",
      });
      const data = await res.json();
      if (!data.ok) return;

      setAccessToken(data.accessToken);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!accessToken) handleFetchAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetchUser = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.user.url(), {
        method: "GET",
        accessToken,
      });
      const data = await res.json();
      if (!data) return;

      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (accessToken && !user) handleFetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, accessToken]);

  const handleFetchTodos = async (): Promise<void> => {
    try {
      const res = await fetcher(apiPath.todos.url(), {
        method: "GET",
        accessToken,
      });
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user && !todos) handleFetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, todos]);

  return (
    <Layout>
      {!isLoading ? (
        <div>
          {accessToken && (
            <div className="mx-auto w-full max-w-xl">
              {user && (
                <Main
                  userState={{ user, setUser }}
                  todosState={{ todos, setTodos }}
                  accessTokenState={{ accessToken, setAccessToken }}
                />
              )}
              {!user && (
                <div className="text-center text-white">
                  user is null or undefined.
                </div>
              )}
            </div>
          )}

          {!accessToken && (
            <div className="mx-auto w-full max-w-xl">
              <AuthForm setAccessToken={setAccessToken} />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-white">Loading...</div>
      )}
    </Layout>
  );
};

export default Index;
