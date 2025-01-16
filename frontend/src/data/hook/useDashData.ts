import { useContext } from 'react';
import DashContext from '../context/DashboardContext';

const useDashData = () => useContext(DashContext);

export default useDashData;