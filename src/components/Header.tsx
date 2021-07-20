import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="py-3 text-center bg-gray-600">
      <h1 className="text-2xl text-white">TODO</h1>
    </header>
  );
};
