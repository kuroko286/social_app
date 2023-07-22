import { useState, useEffect } from "react";

export const useModel = () => {
  const [model, setModel] = useState(false);

  useEffect(() => {
    document.body.style.overflow = model ? "hidden" : "unset";
  }, [model]);

  return [model, setModel];
};
