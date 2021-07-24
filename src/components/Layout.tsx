import type { ReactNode, VFC } from "react";

import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-700">
      <Header />
      <div className="pt-12">{children}</div>
    </div>
  );
};
