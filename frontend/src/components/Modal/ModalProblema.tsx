import useFilaData from "@/data/hook/useFilaData"
import { IconClose } from "../icons/IconesMaterial"
import AreaTexto from "../shared/AreaTexto"
import Botao from "../shared/Botao"

interface ModalProblemaProps {
    children?: any
    open?: boolean
    close?: () => void
    className?: string
    obsProblema?: string
    alterarCampo?: (novoValor: string) => void
}

export default function ModalProblema(props: ModalProblemaProps) {
    const { problemAtividade } = useFilaData()

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
                <div className="flex flex-col justify-between h-66">
                    <div className="flex justify-between bg-red-500 dark:bg-red-700 h-10 w-96">
                        <div className="text-neutral-100 text-xl font-bold flex items-center ml-2">Problema</div>
                        <div className="text-neutral-100 cursor-pointer hover:bg-red-400 dark:hover:bg-neutral-600" onClick={props.close}>
                            <IconClose fontSize="large" />
                        </div>
                    </div>
                    <div className="grow mx-2">
                        <AreaTexto
                            linhas={5}
                            className="mr-2 mt-1"
                            valor={props.obsProblema}
                            alterouCampo={(e) => props.alterarCampo!(e.target.value)}
                        />
                    </div>
                    <div className="h-12 flex justify-end mt-2 mb-1 w-full">
                        <div className="flex justify-between w-[55%] mr-2">
                            <Botao
                                className={`
                                    cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-4 py-2 rounded-lg
                                    border-sky-600 dark:border-sky-800
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                `}
                                executar={() => problemAtividade!({})}
                            >Salvar</Botao>
                            <Botao
                                className={`
                                    cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-4 py-2 rounded-lg
                                    border-red-600 dark:border-red-800
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                                `}
                                executar={props.close}
                            >Cancelar</Botao>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}