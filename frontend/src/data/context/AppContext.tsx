import { createContext, useState } from "react";

interface AppContextProps {
    menu?: Boolean
    avaUser?: Boolean
    tema?: Boolean
    mudarTema?: () => void
    altenarMenu?: () => void
    altenarAvatarUser?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any){
    const [menu, setMenu] = useState(false)
    const [avaUser, setAvaUser] = useState(false)
    const [tema, setMudarTema] = useState(false)

    function altenarMenu(){
        setMenu(!menu)
    }

    function altenarAvatarUser(){
        setAvaUser(!avaUser)
    }
    
    function mudarTema() {
        setMudarTema(!tema)
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
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;