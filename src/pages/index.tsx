import type { NextPage } from "next";
import { AuthForm } from "src/components/AuthForm";

import { Layout } from "../components/Layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <div>
        <AuthForm />
      </div>
    </Layout>
  );
};

export default Index;
