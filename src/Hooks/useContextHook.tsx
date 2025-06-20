import { MainContext } from "../Contexts/MainContext";
import { useContext } from "react";

export const useContextHook = () => {
  const context = useContext(MainContext);
  return context;
};
