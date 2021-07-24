/* eslint-disable @typescript-eslint/naming-convention */
const root = "http://localhost:8080";

export const apiPath = {
  users: {
    url: () => "/users",
  },
  todos: {
    url: (todoId?: string) => (todoId ? `/todos/${todoId}` : `/todos`),
  },
  token: { url: () => "/token" },
  refreshToken: { url: () => "/refresh-token" },
};

type Method = "GET" | "POST" | "PATCH" | "DELETE";

export const fetcher = (
  path: string,
  options: {
    method: Method;
    body?: { name?: string; email: string; password: string };
    accessToken?: string;
  }
) => {
  const createHeaders = (): HeadersInit | undefined => {
    if (!options) return;

    const headers: { "Content-Type"?: string; Authorization?: string } = {};
    if (options.body) headers["Content-Type"] = "application/json";
    if (options.accessToken)
      headers["Authorization"] = `Bearer ${options.accessToken}`;

    return { ...headers };
  };

  return fetch(root + path, {
    method: options?.method,
    headers: createHeaders(),
    body: options?.body && JSON.stringify(options.body),
    mode: "cors",
    credentials: "include",
  });
};
