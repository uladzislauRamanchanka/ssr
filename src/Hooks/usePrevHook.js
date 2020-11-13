import { useEffect, useRef } from "react";

function usePrevHook(value) {
  const previousValue = useRef();
  useEffect(() => {
    previousValue.current = value;
  });

  return previousValue.current;
}

export default usePrevHook;
