import { useEffect, useState } from "react";

const CURRENT_USER_KEY = 'current-user';

function useLocalStorage(value) {
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem(CURRENT_USER_KEY)) || value
  );

  useEffect(() => {
    if (state) {
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(state));
    } else {
      window.localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [state])

  return [state, setState];
}

export default useLocalStorage;