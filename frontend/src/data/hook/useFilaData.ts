import { useContext } from "react";
import FilaContext from "../context/FilaContext";

const useFilaData = () => useContext(FilaContext)

export default useFilaData;