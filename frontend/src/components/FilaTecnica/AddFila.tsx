import useGncData from "@/data/hook/useGncData";
import { IconAddFila, IconRefresh } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import Selecione from "../shared/Selecione";
import { useState } from 'react';
import useFilaData from "@/data/hook/useFilaData";
import Carregando from "../shared/Carregando";
import { dataNova } from './../../data/functions/DataNova';
import CheckBox from "../shared/CheckBox";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function AddFila() {
    const { contratos, tecnicos } = useGncData()
    const { buscarFilaAdd, carregarAdd, bancoAdd, addFilaUser, carregarFilaSend } = useFilaData()
    const [estagio, setEstagio] = useState<string>("")
    const [contrato, setContrato] = useState<string>("")
    const [tecnico, setTecnico] = useState<string>("")

    function renderRows(){
        return bancoAdd?.map((registro: any, i: number) => {
            return (
                <tr key={registro.id ? i : registro.id} className={`${intercalado(i)} grid grid-cols-9`}>
                    <td>{dataNova(registro.Data)}</td>
                    <td className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className="text-sm">Importante</div>
                            <CheckBox
                                nome="Importante"
                                valor={registro.OS}
                            />
                        </div>
                    </td>
                    <td>{registro.OS}</td>
                    <td className="col-span-2">{registro.Cliente}</td>
                    <td className="col-span-2">{registro.Equipamento}</td>
                    <td>{registro.Servico}</td>
                    <td className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <CheckBox
                                nome="Enviado" 
                                valor={registro.OS}
                            />
                        </div>
                    </td>
                </tr>
            )
        })
    }

    function intercalado(i: number){
        let resultado = i % 2
    
        return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
    }

    

    return (
        <div className="flex flex-col p-2 mt-3 dark:text-neutral-200">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <IconAddFila sx={{ fontSize: 50 }} />
                    <span className="text-3xl font-bold ml-1">Add Fila</span>
                </div>
                {/* <Botao
                    className="
                        flex flex-col items-center justify-center h-16 w-16 max-md:w-16 max-sm:w-12 max-md:h-12 max-sm:h-12
                        transition-all bg-green-500 dark:bg-green-700 text-white  rounded-lg
                        border-green-600 dark:border-green-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                    "
                >
                    <IconRefresh sx={{ fontSize: 45 }} />
                </Botao> */}
            </div>
            <div className="flex justify-center max-sm:grid max-sm:grid-cols-1 max-sm:mt-2">
                <div className={`grid ${estagio === "Contrato" ? "grid-cols-2" : "grid-cols-1"} max-sm:grid-cols-1`}>
                    <Selecione
                        texto="Estágio:"
                        className="grow"
                        valor={estagio}
                        alterouCampo={(e) => setEstagio(e.target.value)}
                    >
                        <option>Laudo</option>
                        <option>Manutenção Concluída</option>
                        <option>Contrato</option>
                    </ Selecione>
                    {estagio === "Contrato" ? 
                        <Selecione
                            texto="Contrato:"
                            className="grow"
                            valor={contrato}
                            alterouCampo={(e) => setContrato(e.target.value)}

                        >
                            {contratos!.map((registro: any) => {
                                return (
                                    <option key={registro.id}>{registro.nome}</option>
                                )
                            })}
                        </ Selecione> : false }
                </div>
                <div className="flex items-end ml-5 max-sm:mt-3 max-sm:justify-end max-sm:h-10">
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                        executar={() => buscarFilaAdd!(estagio, contrato)}
                    >Buscar</Botao>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex justify-end">
                {carregarFilaSend ? 
                    <div className="flex  items-end mr-5 animate-pulse"> 
                        <CheckCircleIcon className="text-neutral-100 p-2 rounded-full bg-green-600" sx={{fontSize: 50}}/>
                    </div>
                : false}
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
                    {carregarFilaSend ? false :
                        <div className="flex items-end ml-3 max-sm:mb-2">
                            <Botao
                                className={`
                                cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                                border-emerald-600 dark:border-emerald-800
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}
                            executar={() => addFilaUser!(tecnico)}
                            >enviar</Botao>
                        </div> }
                </div>
                {carregarAdd ? 
                <div className="flex justify-center w-full mt-10">
                    <Carregando cor="success" tamanho={300} grafico/>
                </div>
                 : <div className="mt-5 bg-white dark:bg-neutral-950 shadow-lg w-full p-1 rounded-lg border-2 border-neutral-200 dark:border-neutral-600">
                    <table className="table-fixed w-full">
                        <thead className="bg-neutral-900 dark:bg-neutral-700">
                            <tr className='font-bold text-white'>
                                <th className="rounded-tl-lg rounded-tr-lg p-2">Atividades</th>
                            </tr>
                        </thead>
                        <tbody className="h-96 overflow-auto block">
                            {renderRows()}
                        </tbody>
                    </table>
                </div> }
            </div>
        </div>
    )
}