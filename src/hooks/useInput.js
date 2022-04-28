import { useState } from 'react';

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  function changeValue({ target }) {
    const value = target?.value ?? '';

    setValue(value);
  }

  return [value, changeValue];
};
