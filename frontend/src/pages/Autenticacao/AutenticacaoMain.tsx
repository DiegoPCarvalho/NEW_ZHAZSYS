import useAuthData from "@/data/hook/useAuthData";
import LoginForm from "@/pages/Autenticacao/LoginForm";

export default function AutenticacaoMain() {
    const { tela } = useAuthData()

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center w-[400px] max-sm:w-[350px] bg-neutral-950 bg-opacity-70 py-5 rounded-lg">
               {
                tela === "login" ? <LoginForm /> 
                    : tela === "validarEmail" ? <div>Email</div> 
                        : tela === "novaSenha" ? <div>senha</div> 
                            : false}
            </div>
        </div>
    )
}