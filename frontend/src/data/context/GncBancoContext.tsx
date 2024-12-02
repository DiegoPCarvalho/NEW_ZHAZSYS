import { createContext, useState } from "react";

interface GncBancoContextProps {
    data?: any[]
    novaData?: (novo: any[]) => void
}

const GncBancoContext = createContext<GncBancoContextProps>({});

export function GncProvider({ children } : any){
    const [data, setData] = useState<any[]>([])

    function novaData(novo: any){
        setData(novo)
    }

    return (
        <GncBancoContext.Provider value={{
                data,
                novaData
            }}>
            {children}
        </GncBancoContext.Provider>
    )
}

export default GncBancoContext