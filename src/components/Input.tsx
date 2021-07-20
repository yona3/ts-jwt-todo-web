import type { VFC } from "react";

type Props = {
  type: string;
  value: string;
  placeholder: string;
};

export const Input: VFC<Props> = ({ type, value, placeholder }) => {
  return (
    <input
      className="
        focus:outline-none
        p-2 bg-gray-500 rounded border border-gray-600
      "
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};
