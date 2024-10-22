import { createContext, useState } from "react";

interface AppContextProps {
    menu?: Boolean
    avaUser?: Boolean
    altenarMenu?: () => void
    altenarAvatarUser?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any){
    const [menu, setMenu] = useState(false)
    const [avaUser, setAvaUser] = useState(false)

    function altenarMenu(){
        setMenu(!menu)
    }

    function altenarAvatarUser(){
        setAvaUser(!avaUser)
    }
    
    return(
        <AppContext.Provider value={{
            menu,
            avaUser,
            altenarMenu,
            altenarAvatarUser
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;