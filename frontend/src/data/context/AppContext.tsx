import { createContext, useState } from "react";

interface AppContextProps {
    menu?: boolean
    avaUser?: boolean
    tema?: string
    perfilUser?: any
    mudarTema?: () => void
    altenarMenu?: () => void
    altenarAvatarUser?: () => void
    BuscarDadosUser?: () => void
    mudarCampo?: (novoValor: any) => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children} : any){

    const [menu, setMenu] = useState<boolean>(false)
    const [avaUser, setAvaUser] = useState<boolean>(false)
    const [tema, setMudarTema] = useState<string>('')
    const [perfilUser, setPerfilUser] = useState<any>({});

     function BuscarDadosUser(){
        const string = localStorage.UserMain
        const user = string === undefined ? "" : JSON.parse(string!)

        setPerfilUser(user)
    }

    function mudarCampo(event: any) {
        const User: any = { ...perfilUser }
        User[event.target.name] = event.target.value
        setPerfilUser(User)
    }

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
            perfilUser,
            altenarMenu,
            altenarAvatarUser,
            mudarTema,
            BuscarDadosUser,
            mudarCampo
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;