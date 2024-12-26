import { createContext, useState } from "react";
import Cookies from 'js-cookie';
import router from "next/router";
import Banco from "../database/banco";
import axios from "axios";
import bcrypt from "bcryptjs";
import useLocalStorage from "../hook/useLocalStorage";

interface AuthContextProps {
    usuario?: any
    tela?: string
    erro?: boolean
    carregando?: boolean
    setErro?: (valor: boolean) => void
    mudarTela?: (valor: string) => void
    login?:(email: string, senha: string) => Promise<void>
    validarEmail?: (email: string) => Promise<void>
    logout?: () => void
    cancelar?: () => void
}


const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider({ children } : any){
    const { set, remove } = useLocalStorage()
    const [tela, setTela] = useState<string>("login")
    const [erro, setErro] = useState<boolean>(false)
    const [carregando, setCarregando] = useState<boolean>(false)
    const [usuario, setUsuario] = useState<any>({})
    const baseUrl = Banco("LoginUsuario")

    function mudarTela(valor: string){
        setTela(valor)
    }

    function gerenciarCookie(logado: boolean) {
        if (logado) {
            Cookies.set('admin-template-auth', `${logado}`, {
                expires: 5
            })
        } else {
            Cookies.remove('admin-template-auth')
        }
    }

    async function login(email: string, senha: string){
        try{
            setErro(false)
            setCarregando(true)

            const resp = await axios(baseUrl).then(resp => {
                let dado = resp.data

                const dadoFinal = dado.filter((registro : any) => registro.email === email)

                return dadoFinal
            }).catch(erro => console.log(erro + "Banco está Offline"))

            const pass = await bcrypt.compareSync(senha, resp[0].senha)
             
            if(email === resp[0].email && pass){
                set("UserMain", resp[0])
                gerenciarCookie(true)
                router.push('/')
            }

        }catch(e){
            setErro(true)
            console.log(e)
            setTimeout(()=>{
                setErro(false)
            },2000)
        }finally{
            setCarregando(false)
        }
    }

    async function validarEmail(email: string){
        try{
            const resp = await axios(baseUrl).then(resp => {
                let dado = resp.data

                const dadoFinal = dado.filter((registro : any) => registro.email === email)

                return dadoFinal
            })

            if(email === resp[0].email){
                setUsuario(resp[0])
                mudarTela("novaSenha")
                console.log(usuario)
            }

        }catch(e){
            setErro(true)
            setTimeout(()=>{
                setErro(false)
            },2000)
        }
    }

    function logout(){
        gerenciarCookie(false)
        router.push('/Autenticacao')
        remove("UserMain")
    }

    function cancelar(){
        mudarTela("login")
        setUsuario({})
        setErro(false)
    }


    return (
        <AuthContext.Provider
            value={{
                tela,
                erro,
                carregando,
                setErro,
                mudarTela,
                login,
                logout,
                validarEmail,
                cancelar
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;