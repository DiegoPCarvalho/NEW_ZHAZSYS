import { useState } from "react";
import { IconCheck, IconDeletar, IconInfo } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import PopoverFila from "../Popover/PopoverFIla";

interface CardsFilaProps {
    key: number
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

    return (
        <div key={props.key} className={`flex ${abrir ? "w-full" : "w-36"} h-36 m-2 bg-white dark:bg-neutral-950 border dark:border-neutral-700 shadow-lg dark:shadow-neutral-800 rounded-lg`}>
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
                    <span onClick={() => setAbrir(!abrir)} className={`${props.Servico === "Laudo" ? "bg-blue-700" : "bg-emerald-700"} cursor-pointer text-neutral-100 p-2 rounded-lg mr-1 text-2xl font-bold`}>{props.OS}
                    </span>
                </div>
            </div>
            {abrir ?
                <div className="flex flex-col w-[68%]">
                    <div className="grow my-1 text-sm overflow-hidden">
                        <div>Cliente: {props.dado?.Cliente}</div>
                        <div>Equip: {props.dado?.Equipamento}</div>
                        <div>NS: {props.dado?.NS}</div>
                    </div>
                    <div className="flex justify-end h-12 w-full mb-2">
                        <div className="flex w-36 justify-between">
                            {props.Estagio !== "Iniciado" ? props.Estagio !== "Finalizado" ? props.key !== 0 ?
                                <Botao
                                    className={`
                                cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-2 py-1 rounded-lg
                                border-red-600 dark:border-red-800
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}
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
                                >
                                    <IconCheck fontSize="large" />
                                </Botao> : false}

                        </div>
                    </div>
                </div> : false}
        </div>
    )
}


// <div key={props.key} className="flex mt-3 justify-between py-3 px-2 flex-col bg-white dark:bg-neutral-950 border dark:border-neutral-700 shadow-lg dark:shadow-neutral-800 rounded-lg">

// </div>

{/* <div className="flex justify-between">
                <span className="text-xl font-bold grow"><span className={`${props.Servico === "Laudo" ? "bg-blue-700" : "bg-emerald-700"} text-neutral-100 p-1 rounded-lg mr-1`}>OS:</span>{props.OS}</span>
                <span className="text-xl font-bold grow"><span className={`${props.Servico === "Laudo" ? "bg-blue-700" : "bg-emerald-700"} text-neutral-100 p-1 rounded-lg mr-1`}>Data:</span> {props.Data}</span>
                <div className="flex justify-evenly grow">
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
            </div>
            <div className="flex mt-5 h-14 justify-between">
                <PopoverFila dados={props.dado}/>
                {props.Estagio !== "Iniciado" ? props.Estagio !== "Finalizado" ? props.key !== 0 ?
                    <Botao
                        className={`
                                cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-2 py-1 rounded-lg
                                border-red-600 dark:border-red-800
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}
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
                    >
                        <IconCheck fontSize="large" />
                    </Botao> : false}
            </div> */}