import Formulario from "@/components/shared/Formulario";
import Entrada from "@/components/shared/Entrada";
import useAppData from "@/data/hook/useAppData";
import Selecione from "@/components/shared/Selecione";
import AreaTexto from "@/components/shared/AreaTexto";
import Botao from "@/components/shared/Botao";
import AddIcon from '@mui/icons-material/Add';
import useGncData from "@/data/hook/useGncData";
import useVhlData from "@/data/hook/useVhlContext";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";

interface FormVhlProps{
    table?: boolean
}

export default function FormVhl(props: FormVhlProps) {
    const { tema } = useAppData();
    const { servicoVhl, equipamentos } = useGncData();
    const { 
            vhlForm, 
            alterarCampoVhlForm, 
            vhlEquip, 
            alterarCampoVhlEquip, 
            limparCampos, 
            addEquipamento, 
            equipLista, 
            alterar, 
            removeEquipamento,
            editarEquipamento,
            quantidade,
            verificar,
            finalizarEdit
         } = useVhlData()

    function intercalado(i: number) {
        let resultado = i % 2

        return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
    }

    return (
        <Formulario className="max-sm:h-[96%] dark:text-white">
            <div className="flex justify-between  max-sm:w-[98%] max-sm:grid max-sm:grid-cols-1">
                <div className="flex flex-col overflow-hidden w-[50%] grow p-5 max-sm:w-[95%] bg-white dark:bg-neutral-950 dark:border-2 rounded-lg dark:border-neutral-600 border shadow-lg">
                    <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                        <Entrada
                            id={tema === 'dark' ? "dataDark" : ""}
                            texto="Data:"
                            tipo="datetime-local"
                            nome="Data"
                            valor={vhlForm!.Data}
                            alterouCampo={alterarCampoVhlForm}
                            className="grow"
                        />
                        <Entrada
                            texto="Pedido:"
                            tipo="text"
                            nome="Pedido"
                            valor={vhlForm!.Pedido}
                            alterouCampo={alterarCampoVhlForm}
                            className="grow"
                            mensagemCampo="..."
                            requerido
                        />
                    </div>
                    <div className="mt-5">
                        <Entrada
                            texto="Cliente:"
                            tipo="text"
                            nome="Cliente"
                            valor={vhlForm!.Cliente}
                            alterouCampo={alterarCampoVhlForm}
                            className="grow"
                            mensagemCampo="..."
                            requerido
                        />
                    </div>
                    <div className="flex max-2xl:grid max-2xl:grid-cols-2 mt-5 max-sm:grid max-sm:grid-cols-1">
                        <Selecione
                            texto="Serviço:"
                            nome="Servico"
                            valor={vhlForm!.Servico}
                            alterouCampo={alterarCampoVhlForm}
                            className="grow"
                            requerido
                        >
                            {servicoVhl!.map((registro: any) => {
                                return <option key={registro.id}>{registro.nome}</option>
                            })}
                        </Selecione>
                        <Entrada
                            tipo="number"
                            texto="QTDE:"
                            nome="QTDE"
                            valor={quantidade}
                            desativar
                        />
                    </div>
                    <div className="mt-5">
                        <AreaTexto
                            texto="Observação:"
                            linhas={5}
                            nome="Observacao"
                            valor={vhlForm!.Observacao}
                            alterouCampo={alterarCampoVhlForm}
                            mensagemCampo="..."
                            className="grow"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-[50%] overflow-hidden ml-5 max-sm:ml-0 max-sm:grid p-5 max-sm:grid-cols-1 max-sm:mt-1 max-sm:w-[95%] bg-white dark:bg-neutral-950 dark:border-2 rounded-lg dark:border-neutral-600 border shadow-lg">
                    <div className="grid grid-cols-3 max-sm:grid max-sm:grid-cols-1 ">
                        <Selecione
                            texto={props.table ? "Equip.:" : "Equipamento:"}
                            nome="Equipamento"
                            valor={vhlEquip!.Equipamento}
                            alterouCampo={alterarCampoVhlEquip}
                            className="grow"
                        >
                            {equipamentos!.map((registro: any) => {
                                return <option key={registro.id}>{registro.nome}</option>
                            })}
                        </Selecione>
                        <Entrada
                            texto="Modelo:"
                            tipo="text"
                            nome="Modelo"
                            valor={vhlEquip!.Modelo}
                            alterouCampo={alterarCampoVhlEquip}
                            mensagemCampo="..."
                        />
                        <Entrada
                            texto="NS:"
                            tipo="text"
                            nome="NS"
                            valor={vhlEquip!.NS}
                            alterouCampo={alterarCampoVhlEquip}
                            mensagemCampo="..."
                        />
                    </div>
                    <div className="mt-5 flex justify-beteween max-sm:grid max-sm:grid-cols-1">
                        <Entrada
                            texto="Obs. Item:"
                            tipo="text"
                            nome="Observacao"
                            valor={vhlEquip!.Observacao}
                            alterouCampo={alterarCampoVhlEquip}
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
                                executar={addEquipamento}
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
                                {equipLista!.map((registro: any, i: number) => {
                                    return (
                                        <tr className={`flex justify-between items-center ${intercalado(i)}`} key={registro.id}>
                                            <td className="ml-1">{registro.id}</td>
                                            <td>{registro.Equipamento}</td>
                                            <td>{registro.Modelo}</td>
                                            <td>{registro.NS}</td>
                                            <td className="h-12 mr-1 flex justify-between w-28">
                                                <Botao
                                                    className="
                                                    transition-all bg-yellow-500  text-white px-3 py-2 rounded-lg
                                                    border-yellow-600
                                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                                                    "
                                                    executar={() => editarEquipamento!(registro)}
                                                >
                                                    <IconAlterar />
                                                </Botao>
                                                <Botao
                                                    className="
                                                    transition-all bg-red-500  text-white px-3 py-2 rounded-lg
                                                    border-red-600
                                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                                                    "
                                                    executar={() => removeEquipamento!(registro)}
                                                >
                                                    <IconDeletar />
                                                </Botao>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between mt-5 max-sm:mt-3">
                        <div className="flex items-center mr-5">
                            {alterar ?
                                <Botao
                                    className={`
                                cursor-pointer transition-all bg-lime-500 dark:bg-lime-700 text-white px-5 py-2 rounded-lg
                                border-lime-600 dark:border-lime-800
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}
                                executar={finalizarEdit}
                                >Finalizar</Botao>
                                : false}
                        </div>
                        <div className="flex justify-between items-center w-60 h-12">
                            <Botao
                                className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                            executar={verificar}
                            >Salvar</Botao>
                            <Botao
                                className={`
                                    cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                                    border-red-600 dark:border-red-800
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                                    `}
                                executar={limparCampos}
                            >Cancelar</Botao>
                        </div>
                    </div>
                </div>
            </div>
        </Formulario>
    )
}