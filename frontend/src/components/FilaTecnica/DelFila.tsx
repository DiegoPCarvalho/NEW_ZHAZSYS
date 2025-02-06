import useGncData from "@/data/hook/useGncData";
import { IconDelFila } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import Selecione from "../shared/Selecione";
import { dataNova } from "@/data/functions/DataNova";
import CheckBox from "../shared/CheckBox";
import { useState } from "react";
import useFilaData from "@/data/hook/useFilaData";
import Carregando from "../shared/Carregando";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function DelFila() {
    const { tecnicos } = useGncData()
    const { bancoDelete, buscarFilaDelete, deletarFila } = useFilaData()
    const [tecnico, setTecnico] = useState<string>("")
    const [carregando, setCarregando] = useState<boolean>(false)
    const [carregarDelete, setCarregarDelete] = useState<boolean>(false)

    async function buscar() {
        try {
            setCarregando(true)
            await buscarFilaDelete!(tecnico)
        } catch (e) {
            console.log(e)
        } finally {
            setCarregando(false)
        }
    }

    async function dropFila() {
        try {
            setCarregarDelete(true)
            await deletarFila!()
        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => {
                setCarregarDelete(false)
            }, 2000)
        }
    }

    function renderRows() {
        return bancoDelete?.map((registro: any, i: number) => {
            return (
                <tr key={registro.id ? i : registro.id} className={`${intercalado(i)} grid grid-cols-9`}>
                    <td>{dataNova(registro.Data)}</td>
                    <td className="flex items-center">
                        {registro.Estagio}
                    </td>
                    <td>{registro.OS}</td>
                    <td className="col-span-2">{registro.Cliente}</td>
                    <td className="col-span-2">{registro.Equipamento}</td>
                    <td>{registro.Servico}</td>
                    <td className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <CheckBox
                                nome="Delete"
                                valor={registro.OS}
                            />
                        </div>
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
        <div className="flex flex-col p-2 mt-3 dark:text-neutral-200">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <IconDelFila sx={{ fontSize: 50 }} />
                    <span className="text-3xl font-bold ml-1">Delete Fila</span>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-5">
                <div className="flex justify-start">
                    <Selecione
                        texto="Técnico:"
                        nome="tecnico"
                        className=""
                        valor={tecnico}
                        alterouCampo={e => setTecnico(e.target.value)}
                        optionDisabled
                    >
                        {tecnicos!.map((registro: any) => {
                            return (
                                <option key={registro.id}>{registro.nomeCompleto}</option>
                            )
                        })}
                    </Selecione>
                    <div className="flex items-end ml-3 max-sm:mb-2">
                        <Botao
                            className={`
                        cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                        border-emerald-600 dark:border-emerald-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                    `}
                            executar={buscar}
                        >Consultar</Botao>
                    </div>
                </div>
                <div className="flex justify-end items-end ml-3 max-sm:mb-2">
                    {carregarDelete ?
                        <div className="flex  items-end mr-5 animate-pulse">
                            <CheckCircleIcon className="text-neutral-100 p-2 rounded-full bg-green-600" sx={{ fontSize: 50 }} />
                        </div>
                        : <Botao
                            className={`
                        cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                        border-red-600 dark:border-red-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                    `}
                            executar={dropFila}
                        >Deletar</Botao>}
                </div>
            </div>
            <div className="mt-5 bg-white dark:bg-neutral-950 shadow-lg w-full p-1 rounded-lg border-2 border-neutral-200 dark:border-neutral-600">
                {carregando ?
                    <div className="flex w-full justify-center">
                        <Carregando cor="success" tamanho={200} grafico />
                    </div>
                    : <table className="table-fixed w-full">
                        <thead className="bg-neutral-900 dark:bg-neutral-700">
                            <tr className='font-bold text-white'>
                                <th className="rounded-tl-lg rounded-tr-lg p-2">Atividades</th>
                            </tr>
                        </thead>
                        <tbody className="h-[480px] max-2xl:h-[260px] overflow-auto block">
                            {renderRows()}
                        </tbody>
                    </table>}
            </div>
        </div>
    )
}