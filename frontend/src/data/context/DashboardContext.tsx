import { createContext, useState, useEffect } from "react";
import { GraficoGen, initialGraficoGen } from "../interfaces/GraficoGen";

interface DashContextProps {
    graficoGen?: GraficoGen
}

const DashContext = createContext<DashContextProps>({});

export function DashProvider({children} : any){
    
    const [graficoGen, setGraficoGen] = useState<GraficoGen>(initialGraficoGen)

    return (
        <DashContext.Provider value ={{
            graficoGen
        }}>
            {children}
        </DashContext.Provider>
    )
}

export default DashContext;