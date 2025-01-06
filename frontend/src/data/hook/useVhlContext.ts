import { useContext } from "react";
import VhlContext from "../context/VhlContext";

const useVhlData = () => useContext(VhlContext);

export default useVhlData;