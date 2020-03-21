import { useState } from "react";

export const useInput = initialState => {
  const [value, setValue] = useState(initialState);

  const handleChanges = e => {
    setValue(e.target.value);
  };

  const clearField = () => {
    setValue(initialState);
  };

  return [value, handleChanges, clearField];
};