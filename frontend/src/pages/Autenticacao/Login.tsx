import Image from "next/image";
import Logo from "@/assets/img/logoZhaz.png"
import AuthInput from "@/components/Auth/AuthInput";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Botao from "@/components/shared/Botao";
import { useState } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyIcon from '@mui/icons-material/Key';

export default function LoginForm() {
    const [erro, setErro] = useState<boolean>(false)

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col w-96">
                <div className="flex justify-center">
                    <Image src={Logo} alt="" className="w-44 h-16 " />
                </div>
                <div className="flex flex-col mx-6 mt-5 text-white">
                    <div className="h-10">
                        {erro ? (
                            <div className={`
                        bg-red-600 text-white py-2 px-3 my-2
                         flex bg-opacity-40 rounded-sm
                    `}>
                                <ReportProblemIcon className="text-white" />
                                <span className={`ml-3 text-sm font-bold`}>Usuário ou Senha Inválidos</span>
                            </div>
                        ) : false}
                    </div>
                    <div className={`flex mt-10`}>
                        <div className={` bg-neutral-900 py-4 px-4 bg-opacity-70`}><PermIdentityIcon  className={`${erro ? "text-red-700" : " "}`}/></div>
                        <AuthInput
                        tipo="text"
                        obrigatorio
                        msg="Usuário..."
                        erro={erro}
                        />   
                    </div>
                    <div className="flex mt-5">
                        <div className="bg-neutral-900 py-4 px-4 bg-opacity-70"><KeyIcon className={`${erro ? "text-red-700" : " "}`}/></div>
                        <AuthInput
                        id="dataDark"
                        tipo="password"
                        msg="Senha..."
                        obrigatorio
                        erro={erro}
                    />  
                    </div>
                    <div className="flex justify-evenly mt-24 h-16">
                        <div>
                            <Botao
                                className={`
                            cursor-pointer transition-all bg-teal-500 dark:bg-teal-700 text-white px-3 py-2 rounded-lg
                            border-teal-600 dark:border-teal-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}


                            >Entrar</Botao>
                        </div>
                        <div>
                            <Botao
                                className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-3 py-2 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                            `}
                                executar={() => setErro(!erro)}
                            >Cancelar</Botao>
                        </div>
                    </div>
                    <div className="flex justify-end mt-3 mb-3 h-5 text-sm">
                            <a className="cursor-pointer hover:border-b hover:border-blue-300 hover:text-blue-300">
                                esqueceu a senha?
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}