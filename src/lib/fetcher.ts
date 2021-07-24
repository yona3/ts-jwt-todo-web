/* eslint-disable @typescript-eslint/naming-convention */
const root = "http://localhost:8080";

export const apiPath = {
  users: {
    url: (): string => "/users",
  },
  todos: {
    url: (todoId?: string): string => (todoId ? `/todos/${todoId}` : `/todos`),
  },
  token: { url: (): string => "/token" },
  refreshToken: { url: (): string => "/refresh-token" },
};

type Method = "GET" | "POST" | "PATCH" | "DELETE";

export const fetcher = (
  path: string,
  options: {
    method: Method;
    body?: {
      name?: string;
      email?: string;
      password?: string;
      title?: string;
      isDone?: boolean;
    };
    accessToken?: string;
  }
): Promise<Response> => {
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
