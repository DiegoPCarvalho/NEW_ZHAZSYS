import { createContext, useState, useEffect } from "react";
import { UserMain, initialUserMain } from "../interfaces/UserMain";
import useAuthData from "@/data/hook/useAuthData";
import Cookies from 'js-cookie';

interface AppContextProps {
    menu?: boolean
    avaUser?: boolean
    tema?: string
    perfilUser?: any
    userMain?: UserMain
    mudarTema?: () => void
    altenarMenu?: () => void
    altenarAvatarUser?: () => void
    BuscarDadosUser?: () => void
    mudarCampo?: (novoValor: any) => void
    BuscarDadoUserAcesso?: () => void
    adminL3?: () => void
    adminL2?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children} : any){
    const { logout } = useAuthData()

    const [menu, setMenu] = useState<boolean>(false)
    const [userMain, setUserMain] = useState<UserMain>(initialUserMain)
    const [avaUser, setAvaUser] = useState<boolean>(false)
    const [tema, setMudarTema] = useState<string>('dark')
    const [perfilUser, setPerfilUser] = useState<any>({});

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setMudarTema(temaSalvo!)
        BuscarDadoUserAcesso()
    }, [])

     function BuscarDadosUser(){
        const string = localStorage.UserMain
        const user = string === undefined ? "" : JSON.parse(string!)

        setPerfilUser(user)
    }

    function adminL3(){
        const cookies = Cookies.get("acesso-user")
        
        if(cookies !== "Level 3"){
            logout!()
        }
    }
    
    function adminL2(){
        const cookies = Cookies.get("acesso-user")

        if(cookies === "Level 3"){
        
        }else if(cookies === "Level 2") {
        
        }else {
            logout!()
        }
    }

    function BuscarDadoUserAcesso(){
        const string = localStorage.UserMain
        const user = string === undefined ? "" : JSON.parse(string!)

        setUserMain(user)
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
        const novoTema = tema === '' ? 'dark' : ''
        setMudarTema(novoTema)
        localStorage.tema = novoTema
    }

    return(
        <AppContext.Provider value={{
            menu,
            avaUser,
            tema,
            perfilUser,
            userMain,
            altenarMenu,
            altenarAvatarUser,
            mudarTema,
            BuscarDadosUser,
            mudarCampo,
            BuscarDadoUserAcesso,
            adminL3,
            adminL2
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;