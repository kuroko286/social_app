import { useEffect } from "react";

export const useClickOutside = (ref, func) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      func();
    };

    window.addEventListener("mousedown", listener);
    return () => {
      window.removeEventListener("mousedown", listener);
    };
  }, [ref]);
};
