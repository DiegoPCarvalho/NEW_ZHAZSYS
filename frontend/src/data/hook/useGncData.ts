import { useContext } from "react";
import GncBancoContext from '../context/GncBancoContext';

const useGncData = () => useContext(GncBancoContext)

export default useGncData