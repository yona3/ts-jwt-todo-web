export type Keys = "name" | "email" | "password";

export type User = {
  uuid: string;
  email: string;
  password: string;
  name: string;
};

export type Todo = {
  uuid: string;
  title: string;
  isDone: boolean;
  createdAt: Date;
};

export type AccessTokenResponse = {
  ok: boolean;
  accessToken?: string;
  error?: string;
};
