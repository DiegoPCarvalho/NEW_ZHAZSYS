import { createContext, useState, useEffect } from "react";

interface FilaContextProps {
    tela?: string
    setTela?: (novoValor: string) => void
    openMS?: boolean
    setOpenMS?: (novoValor: boolean) => void
}

const FilaContext = createContext<FilaContextProps>({})

export function FilaProvider({children} : any){
    const [tela, setTela] = useState<string>("AddFila")
    const [openMS, setOpenMS] = useState<boolean>(false)


    return (
        <FilaContext.Provider value={{
            tela,
            setTela,
            openMS,
            setOpenMS
        }}>
            {children}
        </FilaContext.Provider>
    )
}

export default FilaContext;