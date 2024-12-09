import Formulario from "@/components/shared/Formulario";
import Entrada from "@/components/shared/Entrada";
import useAppData from "@/data/hook/useAppData";
import Selecione from "@/components/shared/Selecione";
import AreaTexto from "@/components/shared/AreaTexto";
import Botao from "@/components/shared/Botao";
import AddIcon from '@mui/icons-material/Add';

export default function FormVhl() {
    const { tema } = useAppData()

    return (
        <Formulario className="max-sm:h-[96%] dark:text-white">
            <div className="flex justify-between w-[100%] max-sm:w-[98%] max-sm:grid max-sm:grid-cols-1">
                <div className="flex flex-col grow p-5 max-sm:w-[95%] bg-white dark:bg-neutral-950 dark:border-2 rounded-lg dark:border-neutral-600 border shadow-lg">
                    <div className="flex max-sm:grid max-sm:grid-cols-1">
                        <Entrada
                            id={tema === 'dark' ? "dataDark" : ""}
                            texto="Data:"
                            tipo="datetime-local"
                            nome="Data"
                            className="grow"
                        />
                        <Entrada
                            texto="Pedido:"
                            tipo="text"
                            nome="Pedido"
                            className="grow"
                            mensagemCampo="..."
                        />
                    </div>
                    <div className="mt-5">
                        <Entrada
                            texto="Cliente:"
                            tipo="text"
                            nome="Cliente"
                            className="grow"
                            mensagemCampo="..."
                        />
                    </div>
                    <div className="flex mt-5 max-sm:grid max-sm:grid-cols-1">
                        <Selecione
                            texto="Serviço:"
                            nome="Servico"
                            className="grow"
                        >
                            <option>aaaaaaaaaaaaaaaaaaaaa</option>
                        </Selecione>
                        <Entrada
                            tipo="number"
                            texto="QTDE:"
                            nome="QTDE"
                        />
                    </div>
                    <div className="mt-5">
                        <AreaTexto
                            texto="Observação:"
                            linhas={5}
                            nome="Observacao"
                            mensagemCampo="..."
                            className="grow"
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-5 max-sm:grid p-5 max-sm:grid-cols-1 max-sm:mt-1 max-sm:w-[95%] bg-white dark:bg-neutral-950 dark:border-2 rounded-lg dark:border-neutral-600 border shadow-lg">
                    <div className="flex max-sm:grid max-sm:grid-cols-1 ">
                        <Selecione
                            texto="Equipamento:"
                            nome="Equipamento"
                            className="grow"
                        >
                            <option>aaaaaaaaaaaaaaaaaaaaa</option>
                        </Selecione>
                        <Entrada
                            texto="Modelo:"
                            tipo="text"
                            nome="Modelo"
                            className="grow"
                            mensagemCampo="..."
                        />
                        <Entrada
                            texto="NS:"
                            tipo="text"
                            nome="NS"
                            className="grow"
                            mensagemCampo="..."
                        />
                    </div>
                    <div className="mt-5 flex justify-beteween max-sm:grid max-sm:grid-cols-1">
                        <Entrada
                            texto="Obs. Item:"
                            tipo="text"
                            nome="ObsItem"
                            className="grow"
                            mensagemCampo="..."
                        />
                        <div className="flex items-end ml-2 max-sm:h-10 max-sm:mt-5">
                            <Botao
                                className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-3 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                            ><AddIcon fontSize="large" /></Botao>
                        </div>
                    </div>
                    <div className="mt-5 flex max-sm:grid max-sm:grid-cols-1">
                        <table className="table-fixed grow shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-black text-white dark:bg-neutral-700">
                                    <th className="text-center rounded-t-lg p-1">Equipamentos</th>
                                </tr>
                            </thead>
                            <tbody className="block overflow-auto h-[150px] rounded-b-lg border-2 dark:border-neutral-700" id="hiddenScroll">
                                <tr className="flex justify-between">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                                <tr className="flex justify-between bg-neutral-400 text-white dark:bg-neutral-600">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                                <tr className="flex justify-between">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                                <tr className="flex justify-between">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                                <tr className="flex justify-between">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                                <tr className="flex justify-between">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                                <tr className="flex justify-between">
                                    <td className="">Cabo COnfec.</td>
                                    <td>LS2208</td>
                                    <td className="">13246578966</td>
                                    <td>sem dado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-5 max-sm:mt-3">
                        <div className="flex justify-between items-center w-60 h-12">
                            <Botao
                                className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                            >Salvar</Botao>
                            <Botao
                                className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                            `}
                            >Cancelar</Botao>
                        </div>
                    </div>
                </div>
            </div>
        </Formulario>
    )
}