import useFilaData from "@/data/hook/useFilaData";
import { IconClose, IconEnviar, IconReload } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import { useState } from "react";
import Carregando from "../shared/Carregando";

interface ModalDownloadProps {
    open?: boolean
    close?: () => void
    className?: string
}

export default function ModalDownload(props: ModalDownloadProps) {
    const [carregando, setCarregando] = useState<boolean>(false)
    const [carregandoList, setCarregandoList] = useState<boolean>(false)

    const { buscarFilaDownload, bancoDownload, sendMyList } = useFilaData()

    async function buscar() {
        try {
            setCarregando(true)
            await buscarFilaDownload!()
        } catch (e) {
            console.log(e)
        } finally {
            setCarregando(false)
        }
    }

    async function enviar(registro: any){
        try{
            setCarregandoList(true)
          await sendMyList!(registro)

        }catch(e){
            console.log(e)
        }finally{
            setTimeout(() => {
                setCarregandoList(false)
            }, 2000)
        }
    }

    function renderRows(){
        return bancoDownload?.map((registro: any, id: number) => {
            return (
                <tr key={id} className={`grid grid-cols-5 ${intercalado(id)}`}>
                    <td className="flex justify-center">{registro.OS}</td>
                    <td className="col-span-2">{registro.Cliente} - {registro.Equipamento}</td>
                    <td className="flex justify-center">{registro.Servico}</td>
                    <td className="flex justify-center items-center">
                        {carregandoList ? 
                            <Carregando cor="success" tamanho={30}/>
                        :
                         <Botao
                            className={`
                                transition-all ${registro.Servico === "Laudo" ? " bg-blue-500 border-blue-600" : "bg-green-500 border-green-600"}  text-white px-3 py-2 rounded-lg
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                            `}
                            executar={() => enviar(registro)}
                        >
                            <IconEnviar />
                        </Botao> }
                    </td>
                </tr>
            )
        })
    }

    function intercalado(i: number) {
        let resultado = i % 2

        return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
    }

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
                <div className="flex flex-col w-[600px] h-[700px] max-2xl:h-[500px]">
                    <div className="flex justify-between h-12 bg-blue-600">
                        <div className="flex items-center ml-2 text-2xl font-bold text-neutral-200">Enviar p/ Fila</div>
                        <div className="flex items-center text-neutral-100 cursor-pointer hover:bg-blue-500" onClick={props.close}>
                            <IconClose fontSize="large" />
                        </div>
                    </div>
                    <div className="flex justify-end mx-3 mt-3 h-[70px]">
                        <Botao
                            className="
                                    flex flex-col items-center justify-center py-1 px-2
                                    transition-all bg-emerald-500 dark:bg-emerald-700 text-white  rounded-lg
                                    border-emerald-600 dark:border-emerald-800
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                                "
                            executar={buscar}
                        >
                            <IconReload sx={{ fontSize: 50 }} />
                        </Botao>
                    </div>
                    <div className="flex justify-center w-full">
                        {carregando ?
                            <div className="mt-20">
                                <Carregando cor="success" tamanho={200} grafico />
                            </div>
                            :
                            <div className="mt-10 bg-white dark:bg-neutral-950 shadow-lg w-[95%] p-1 rounded-lg border-2 border-neutral-200 dark:border-neutral-600">
                                <table className="table-fixed w-full">
                                    <thead className="bg-neutral-900 dark:bg-neutral-700">
                                        <tr className='font-bold text-white'>
                                            <th className="rounded-tl-lg rounded-tr-lg p-2">Atividades</th>
                                        </tr>
                                    </thead>
                                    <tbody id="hiddenScroll" className="block h-[450px] max-2xl:h-[250px] overflow-auto">
                                        {renderRows()}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}