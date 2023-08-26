import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [values, setValues] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [values, key]);

  return [values, setValues];
}
