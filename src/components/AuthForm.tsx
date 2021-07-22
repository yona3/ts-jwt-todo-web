import type {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  VFC,
} from "react";
import { useState } from "react";
import { useForm } from "src/hooks/form";
import { apiPath, fetcher } from "src/lib/fetcher";
import type { AccessTokenResponse, Keys } from "src/types";

import { Input } from "./Input";

type Props = {
  setAccessToken: Dispatch<SetStateAction<string>>;
};

export const AuthForm: VFC<Props> = ({ setAccessToken }) => {
  const [formType, setFormType] = useState<"register" | "login">("register");
  const { values, handleSetValue } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const body: { name?: string } & Omit<typeof values, "name"> = { ...values };

    try {
      if (formType === "login") {
        delete body.name;

        const res = await fetcher(apiPath.token.url(), {
          method: "POST",
          body,
        });
        const data: AccessTokenResponse = await res.json();
        if (!data.ok || !data.accessToken) throw new Error(data.error);

        setAccessToken(data.accessToken);
      } else if (formType === "register") {
        const res = await fetcher(apiPath.users.url(), {
          method: "POST",
          body,
        });
        const user = await res.json();
        if (!user) throw new Error("User not created");

        setFormType("login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeFormType: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setFormType((prev) => (prev === "register" ? "login" : "register"));
  };

  const handleChangeFormValue: ChangeEventHandler<HTMLInputElement> = (e) =>
    handleSetValue(e.target.name as Keys, e.target.value);

  return (
    <form className="py-5 px-5 bg-gray-600 rounded-md" onSubmit={handleSubmit}>
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
          type="button"
        >
          {formType === "register" ? "Login" : "Register"}
        </button>
      </div>
    </form>
  );
};
