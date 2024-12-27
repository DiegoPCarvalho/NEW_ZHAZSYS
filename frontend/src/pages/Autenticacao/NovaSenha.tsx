import AuthInput from '@/components/Auth/AuthInput';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import KeyIcon from '@mui/icons-material/Key';
import Botao from '@/components/shared/Botao';
import useAuthData from "@/data/hook/useAuthData";
import { useState } from 'react';

export default function NovaSenha() {
    const { erro, cancelar, novaSenha } = useAuthData()
    const [senha, setSenha] = useState<string>("")
    const [confirmarSenha, setComfirmarSenha] = useState<string>("")

    return (
        <div className="flex flex-col">
            <div className="text-neutral-200 font-bold flex justify-center">Insira a Nova Senha</div>
            <div className="h-10">
                {erro ? <div className={`
                        bg-red-600 text-white py-2 px-3 my-2
                         flex bg-opacity-40 rounded-sm
                    `}>
                    <ReportProblemIcon className="text-white" />
                    <span className={`ml-3 text-sm font-bold`}>Senhas não Correspondem</span>
                </div> : false}
            </div>
            <form action="javascript:myFunction(); return false;">
                <div className="flex flex-col mt-5">
                    <div className={`flex`}>
                        <div className="bg-neutral-900 py-4 px-4 bg-opacity-70"><KeyIcon className={`${erro ? "text-red-700" : "text-white"}`} /></div>
                        <AuthInput
                            id="dataDark"
                            tipo="password"
                            msg="Senha..."
                            obrigatorio
                            valor={senha}
                            onChange={e => setSenha(e)}
                        />
                    </div>
                    <div className="flex mt-3">
                        <div className="bg-neutral-900 py-4 px-4 bg-opacity-70"><KeyIcon className={`${erro ? "text-red-700" : "text-white"}`} /></div>
                        <AuthInput
                            id="dataDark"
                            tipo="password"
                            msg="Confirmar Senha..."
                            obrigatorio
                            valor={confirmarSenha}
                            onChange={e => setComfirmarSenha(e)}
                        />
                    </div>
                </div>
                <div className="flex justify-evenly mt-5 h-10">
                    <Botao
                        className={`
                                cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-3 py-2 rounded-lg
                                border-sky-600 dark:border-sky-800
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                `}

                        executar={() => novaSenha!(senha, confirmarSenha)}
                    >Salvar</Botao>
                    <Botao
                        className={`
                                cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-3 py-2 rounded-lg
                                border-red-600 dark:border-red-800
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                                `}
                        executar={cancelar}
                    >Cancelar</Botao>
                </div>
            </form>
        </div>
    )
}