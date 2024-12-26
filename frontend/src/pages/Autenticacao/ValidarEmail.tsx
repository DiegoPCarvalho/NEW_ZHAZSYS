import AuthInput from "@/components/Auth/AuthInput";
import Botao from "@/components/shared/Botao";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import useAuthData from "@/data/hook/useAuthData";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useState } from "react";

export default function ValidarEmail() {
    const { mudarTela, erro, validarEmail } = useAuthData()
    const [email, setEmail] = useState<string>("")
    
    return (
        <div className="flex flex-col">
            <div className="text-neutral-200 font-bold text-xl flex justify-center">
                Informe E-mail Cadastrado
            </div>
            <div className="h-10">
              { erro ? <div className={`
                        bg-red-600 text-white py-2 px-3 my-2
                         flex bg-opacity-40 rounded-sm
                    `}>
                        <ReportProblemIcon className="text-white" />
                        <span className={`ml-3 text-sm font-bold`}>E-mail não Cadastrado</span>
                </div> : false }
            </div>
            <div className={`flex mt-5`}>
                <div className={` bg-neutral-900 py-4 px-4 bg-opacity-70`}><PermIdentityIcon className={`${erro ? "text-red-700" : "text-white"}`} /></div>
                <AuthInput
                    tipo="text"
                    obrigatorio
                    msg="Email..."
                    valor={email}
                    onChange={e => setEmail(e)}
                />
            </div>
            <div className="flex h-10 mt-5 justify-evenly">
                <Botao
                    className={`
                            cursor-pointer transition-all bg-teal-500 dark:bg-teal-700 text-white px-3 py-2 rounded-lg
                            border-teal-600 dark:border-teal-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}

                    executar={() => validarEmail!(email)}
                >Validar</Botao>
                <Botao
                className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-3 py-2 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                            `}
                    executar={() => mudarTela!("login")}
                >Voltar</Botao>
            </div>
        </div>
    )
}