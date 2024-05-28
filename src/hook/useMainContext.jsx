import { useContext } from "react";
import MainContext from "../context/MainContex";

const useMainContext = () => {
  return useContext(MainContext)
}

export default useMainContext
