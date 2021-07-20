# ts-jwt-todo-app web spec

## pages

- / : todo list or login form

## store

```typescript
type Todo = {
  todoId: string;
  title: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  userId: string;
  name: string;
  email: string;
  todos: string[];
};

type Store = {
  user: User;
  todo: Todo[];
  accessToken: string;
};
```

## authentication

- guest
- email & password
