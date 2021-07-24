import type {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  VFC,
} from "react";
import { useState } from "react";
import { apiPath, fetcher } from "src/lib/fetcher";
import type { Todo } from "src/types";

import { Input } from "./Input";

type Props = {
  accessToken: string;
  setTodos: Dispatch<SetStateAction<Todo[] | undefined>>;
};

export const TodoForm: VFC<Props> = ({ accessToken, setTodos }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const res = await fetcher(apiPath.todos.url(), {
        method: "POST",
        body: { title: value },
        accessToken,
      });
      const data = await res.json();
      if (!data.ok) return;

      setTodos((prev) => prev && [...prev, data.todo]);
      setValue("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="flex py-2 px-2 bg-gray-500 rounded"
      onSubmit={handleSubmit}
    >
      <Input
        name="todo"
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={handleChangeValue}
      />
      <button
        className="py-2 w-20 text-white bg-gray-800 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
