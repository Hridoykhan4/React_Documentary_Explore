import React, { useState } from "react";

const useInputValue = (givenValue = "") => {
  const [value, setValue] = useState(givenValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useInputValue;
