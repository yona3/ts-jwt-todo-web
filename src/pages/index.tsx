import type { NextPage } from "next";
import { useState } from "react";
import { Input } from "src/components/Input";

import { Layout } from "../components/Layout";

const Index: NextPage = () => {
  const [formType, setFormType] = useState<"register" | "login">("login");

  const handleChangeFormType = () =>
    setFormType((prev) => (prev === "register" ? "login" : "register"));

  return (
    <Layout>
      <div>
        <form className="py-5 px-5 mx-auto max-w-xl bg-gray-600 rounded-md">
          <h1 className="text-2xl font-semibold text-white">
            {formType === "register" ? "Register" : "Login"}
          </h1>

          <div className="flex flex-col mt-4 space-y-3">
            {formType === "register" && (
              <Input type="text" value="" placeholder="name" />
            )}
            <Input type="email" value="" placeholder="email" />
            <Input type="password" value="" placeholder="password" />
          </div>

          <div className="flex justify-between items-center pr-4 mt-4">
            <button
              className="py-2 px-6 text-white bg-gray-700 rounded border border-gray-600"
              type="submit"
            >
              submit
            </button>

            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <p
              className="text-white underline cursor-pointer"
              onClick={handleChangeFormType}
            >
              {formType === "register" ? "Login" : "Register"}
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Index;
