import type { ChangeEventHandler, VFC } from "react";

type Props = {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: VFC<Props> = ({
  name,
  type,
  value,
  placeholder,
  onChange: handleChangeFormValue,
}) => {
  return (
    <input
      className="
        focus:outline-none text-white w-full
        p-2 bg-gray-500 rounded
      "
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChangeFormValue}
    />
  );
};
