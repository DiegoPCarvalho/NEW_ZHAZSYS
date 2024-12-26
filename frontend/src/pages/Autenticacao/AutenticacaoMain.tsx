import useAuthData from "@/data/hook/useAuthData";
import LoginForm from "@/pages/Autenticacao/LoginForm";
import ValidarEmail from "./ValidarEmail";
import NovaSenha from "./NovaSenha";

export default function AutenticacaoMain() {
    const { tela } = useAuthData()

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center w-[400px] max-sm:w-[350px] bg-neutral-950 bg-opacity-70 py-5 rounded-lg">
               {
                tela === "login" ? <LoginForm /> 
                    : tela === "validarEmail" ? <ValidarEmail /> 
                        : tela === "novaSenha" ? <NovaSenha /> 
                            : false}
            </div>
        </div>
    )
}