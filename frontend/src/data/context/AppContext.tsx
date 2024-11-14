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

    const [menu, setMenu] = useState(false)
    const [avaUser, setAvaUser] = useState(false)
    const [tema, setMudarTema] = useState('')

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