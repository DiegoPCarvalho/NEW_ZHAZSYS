import { createContext, useState } from "react";

interface AppContextProps {
    menu?: boolean
    avaUser?: boolean
    tema?: string
    mudarTema?: () => void
    altenarMenu?: () => void
    altenarAvatarUser?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children} : any){

    const [menu, setMenu] = useState<boolean>(false)
    const [avaUser, setAvaUser] = useState<boolean>(false)
    const [tema, setMudarTema] = useState<string>('')

    function altenarMenu(){
        setMenu(!menu)
    }

    function altenarAvatarUser(){
        setAvaUser(!avaUser)
    }
    
    function mudarTema() {
       tema === "dark" ? setMudarTema('') : setMudarTema('dark')
    }

    return(
        <AppContext.Provider value={{
            menu,
            avaUser,
            tema,
            altenarMenu,
            altenarAvatarUser,
            mudarTema
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;