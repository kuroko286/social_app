import { useState, useEffect } from "react";

export const useModel = () => {
  const [model, setModel] = useState("none");

  useEffect(() => {
    document.body.style.overflow = model !== "none" ? "hidden" : "unset";
  }, [model]);

  return [model, setModel];
};
