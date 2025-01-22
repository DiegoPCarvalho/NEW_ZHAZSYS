import { createContext, useState, useEffect } from "react";

interface FilaContextProps {
    tela?: string
    setTela?: (novoValor: string) => void
}

const FilaContext = createContext<FilaContextProps>({})

export function FilaProvider({children} : any){
    const [tela, setTela] = useState<string>("AddFila")


    return (
        <FilaContext.Provider value={{
            tela,
            setTela
        }}>
            {children}
        </FilaContext.Provider>
    )
}

export default FilaContext;