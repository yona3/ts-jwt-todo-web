import type { NextPage } from "next";
import { AuthForm } from "src/components/AuthForm";
import { Main } from "src/components/Main";
import type { User } from "src/types";

import { Layout } from "../components/Layout";

const Index: NextPage = () => {
  const user: User = {
    userId: "user1",
    name: "user1",
    email: "user1@gmail.com",
    todos: ["todo1", "todo2", "todo3"],
  };
  // const user: User | null = null;

  return (
    <Layout>
      <div>
        {user ? (
          <div className="mx-auto w-full max-w-xl">
            <Main user={user} />
          </div>
        ) : (
          <div className="mx-auto w-full max-w-xl">
            <AuthForm />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
