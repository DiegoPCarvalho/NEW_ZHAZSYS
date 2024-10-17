"use client"
import { createContext, useState } from "react";

interface AppContextProps {
    menu?: boolean
    altenarTema?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any){
    const [menu, setMenu] = useState(false)

    function altenarTema(){
        setMenu(!menu)
    }
    
    return(
        <AppContext.Provider value={{
            menu,
            altenarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;