import { createContext, useState } from "react";

interface AuthContextProps {
    tela?: string
    mudarTela?: (valor: string) => void
}


const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider({ children } : any){
    const [tela, setTela] = useState<string>("login")

    function mudarTela(valor: string){
        setTela(valor)
    }

    return (
        <AuthContext.Provider
            value={{
                tela,
                mudarTela
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;