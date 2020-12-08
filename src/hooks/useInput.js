import { useState } from 'react';

export function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleChangeValue(e) {
    const value = e.target.value;

    if (value) {
      setValue(e.target.value);
    }
  }

  return [value, handleChangeValue];
}
