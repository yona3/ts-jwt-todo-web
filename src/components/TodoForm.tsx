import type { ChangeEvent, VFC } from "react";
import { useState } from "react";

import { Input } from "./Input";

export const TodoForm: VFC = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <form className="flex py-2 px-2 bg-gray-500 rounded">
      <Input
        name="todo"
        type="text"
        value={value}
        placeholder="What needs to be done?"
        onChange={handleChangeValue}
      />
      <button className="py-2 w-20 text-white bg-gray-800 rounded-md">
        Add
      </button>
    </form>
  );
};
