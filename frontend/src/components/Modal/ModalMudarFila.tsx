import useFilaData from "@/data/hook/useFilaData";
import { IconClose } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import { useState } from "react";
import Carregando from "../shared/Carregando";
import { dataNova } from "@/data/functions/DataNova";
import Selecione from "../shared/Selecione";
import useGncData from "@/data/hook/useGncData";

interface ModalMudarFilaProps {
    open?: boolean
    close?: () => void
    className?: string
    dado?: any
}

export default function ModalMudarFila(props: ModalMudarFilaProps) {
    const { tecnicos } = useGncData()
    const { sendListOutherTec, closeModalMudar, tecMF, setTecMF } = useFilaData()

    return (
        <>
            <div className={`
                 fixed top-0 left-0 h-screen w-screen
                bg-neutral-900 bg-opacity-60 z-30
                 ${props.open ? "translate-x-0" : "hidden"}
                 `}
                onClick={props.close}
            >
            </div>
            <div className={`
                bg-neutral-100 overflow-y-auto
                dark:border-2 
                dark:border-neutral-600
                rounded-lg 
                dark:bg-neutral-950
                fixed z-40 ${props.className}
                duration-300 ease-linear
            ${props.open ? "translate-x-0" : "hidden"}

                `}>
                <div className="flex flex-col w-[600px] h-[350px] max-2xl:h-[350px]">
                    <div className="flex justify-between h-12 bg-neutral-900 dark:bg-neutral-700">
                        <div className="flex items-center ml-2 text-2xl font-bold text-neutral-200">Enviar p/ Fila</div>
                        <div className="flex items-center text-neutral-100 cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-600" onClick={props.close}>
                            <IconClose fontSize="large" />
                        </div>
                    </div>
                    <div className="flex flex-col p-3 dark:text-neutral-200">
                        <div className="flex flex-col justify-start px-2">
                            <div className="flex justify-between">
                                <div><span className="font-bold text-md">Data:</span> <span>{dataNova(props.dado?.Data)}</span></div>
                                <div><span className="font-bold text-md">OS:</span> <span>{props.dado?.OS}</span></div>
                            </div>
                            <div><span className="font-bold text-md">Cliente:</span> <span>{props.dado?.Cliente}</span></div>
                            <div><span className="font-bold text-md">Equip:</span> <span>{props.dado?.Equipamento}</span></div>
                            <div><span className="font-bold text-md">NS:</span> <span>{props.dado?.NS}</span></div>
                            <div className="flex justify-between">
                                <div><span className="font-bold text-md">Servico:</span> <span>{props.dado?.Servico}</span></div>
                                <div><span className="font-bold text-md">Estágio:</span> <span>{props.dado?.Estagio}</span></div>
                            </div>
                        </div>
                        <Selecione
                            texto="Técnico:"
                            nome="tecnico"
                            className=""
                            valor={tecMF}
                            alterouCampo={e => setTecMF!(e.target.value)}
                            filtro
                        >
                            {tecnicos!.map((registro: any) => {
                                return (
                                    <option key={registro.id}>{registro.nomeCompleto}</option>
                                )
                            })}
                        </Selecione>
                        <div className="flex justify-end mt-3 h-12">
                            <div className="flex justify-between w-[40%]">
                                <Botao
                                    className={`
                                        cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                                        border-sky-600 dark:border-sky-800
                                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    `}

                                    executar={() => sendListOutherTec!(tecMF!)}
                                >Salvar</Botao>
                                <Botao
                                    className={`
                                        cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                                        border-red-600 dark:border-red-800
                                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                                        `}
                                    executar={closeModalMudar}
                                >Cancelar</Botao>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}