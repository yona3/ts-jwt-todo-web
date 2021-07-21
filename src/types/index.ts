export type Keys = "name" | "email" | "password";

export type User = {
  userId: string;
  name: string;
  email: string;
  todos: string[];
};

export type Todo = {
  todoId: string;
  title: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};
