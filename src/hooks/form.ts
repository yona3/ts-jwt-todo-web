import { useState } from "react";
import type { Keys } from "src/types";

export const useForm = (defaultValue: { [key in Keys]: string }) => {
  const [values, setValues] = useState<{ [key in Keys]: string }>(defaultValue);

  const handleSetValue = (key: Keys, value: string) =>
    setValues((prev) => {
      const newValue = { ...prev };
      newValue[key] = value;
      return newValue;
    });

  return { values, handleSetValue };
};
