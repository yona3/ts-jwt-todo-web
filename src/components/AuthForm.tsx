import type { ChangeEvent, FormEvent, VFC } from "react";
import { useState } from "react";
import { useForm } from "src/hooks/form";
import type { Keys } from "src/types";

import { Input } from "./Input";

export const AuthForm: VFC = () => {
  const [formType, setFormType] = useState<"register" | "login">("register");
  const { values, handleSetValue } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeFormType = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormType((prev) => (prev === "register" ? "login" : "register"));
  };

  const handleChangeFormValue = (e: ChangeEvent<HTMLInputElement>) =>
    handleSetValue(e.target.name as Keys, e.target.value);

  return (
    <form className="py-5 px-5 bg-gray-600 rounded-md">
      <h1 className="text-2xl font-semibold text-white">
        {formType === "register" ? "Register" : "Login"}
      </h1>

      <div className="flex flex-col mt-4 space-y-3">
        {formType === "register" && (
          <Input
            name="name"
            type="text"
            value={values.name}
            onChange={handleChangeFormValue}
            placeholder="name"
          />
        )}
        <Input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChangeFormValue}
          placeholder="email"
        />
        <Input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChangeFormValue}
          placeholder="password"
        />
      </div>

      <div className="flex justify-between items-center pr-4 mt-4">
        <button
          className="
        border border-gray-600 focus:outline-none
        py-2 px-6 text-white bg-gray-700 rounded 
      "
          type="submit"
        >
          submit
        </button>

        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <button
          className="text-white underline cursor-pointer"
          onClick={handleChangeFormType}
          onSubmit={handleChangeFormType}
        >
          {formType === "register" ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
};
