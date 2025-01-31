import { useState } from "react";
import { IconCheck, IconDeletar } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import useFilaData from "@/data/hook/useFilaData";


interface CardsFilaProps {
    key: number
    id: any
    OS: number
    Data?: string
    Servico: string
    Importante?: boolean
    Problema?: string
    Contrato: string
    Estagio?: string
    dado?: any
    
}

export default function CardsFila(props: CardsFilaProps) {
    const [abrir, setAbrir] = useState<boolean>(false)
    const { removerFila, startAtividade } = useFilaData()

    function deletar(registro: any){
        removerFila!(registro)
        setAbrir(false)
    }

    function start(registro: any){
        startAtividade!(registro)
        setAbrir(false)
    }

    return (
        <div key={props.key} className={`flex z-30 overflow-hidden dark:hover:bg-neutral-900 ${abrir ? "absolute transition-all duration-500 easy-linear w-[510px] max-lg:w-[400px] h-40 max-lg:h-32" : " w-40 max-lg:w-32 max-lg:h-32 h-40 transition-all duration-500 easy-linear"} relative  m-2 bg-white dark:bg-black border dark:border-neutral-700 shadow-lg dark:shadow-neutral-800 rounded-lg`}>
            <div className={`flex flex-col items-center ${abrir ? "w-[30%]" : "w-full"}`}>
                <div className="flex w-full justify-evenly h-10 items-center">
                    {props.Contrato === "Avulso" ? false :
                        <span className="h-5 w-5 rounded-full bg-black dark:bg-stone-800 dark:border dark:border-stone-600"></span>
                    }
                    {props.Servico === "Laudo" ?
                        <span className="h-5 w-5 rounded-full bg-blue-700"></span>
                        : <span className="h-5 w-5 rounded-full bg-emerald-700"></span>}
                    {props.Problema === "Sim" ?
                        <span className="h-5 w-5 rounded-full bg-red-700"></span>
                        : false}
                    {props.Importante ?
                        <span className="h-5 w-5 rounded-full bg-yellow-500"></span>
                        : false}
                </div>
                <div className="grow flex items-center justify-center  w-full">
                    <span onClick={() => setAbrir(!abrir)} className={`cursor-pointer dark:text-neutral-100  p-2 rounded-lg mr-1 text-2xl font-bold`}>{props.OS}
                    </span> 
                </div>
            </div>
            <div className={`flex flex-col ${abrir ? "transition-x-all" : "hidden"}`}>
                <div className="grow my-1 text-sm overflow-hidden">
                    <div><span className="font-bold">Cliente:</span> {props.dado?.Cliente}</div>
                    <div><span className="font-bold">Equip:</span> {props.dado?.Equipamento}</div>
                    <div><span className="font-bold">NS:</span> {props.dado?.NS}</div>
                </div>
                <div className="flex justify-end h-12 w-full mb-2">
                    <div className={`flex w-36 ${props.id !== 0 ? "justify-between" : "justify-end"} mr-2`}>
                        {props.Estagio !== "Iniciado" ? props.Estagio !== "Finalizado" ? props.id !== 0 ?
                            <Botao
                                className={`
                        cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-2 py-1 rounded-lg
                        border-red-600 dark:border-red-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                    `}
                        executar={() => deletar(props.dado)}
                            >
                                <IconDeletar fontSize="large" />
                            </Botao> : false : false : false}
                        {props.Estagio !== "Finalizado" ?
                            <Botao
                                className={`
                        cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-2 py-1 rounded-lg
                        border-green-600 dark:border-green-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                    `}
                        executar={() => start(props.dado)}
                            >
                                <IconCheck fontSize="large" />
                            </Botao> : false}

                    </div>
                </div>
            </div>
        </div>
    )
}
