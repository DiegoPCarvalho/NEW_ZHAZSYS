import Botao from "@/components/shared/Botao";
import TabelaGnc from "@/components/shared/TabelaGnc";
import { dataNova } from "@/data/functions/DataNova";
import useGncData from "@/data/hook/useGncData";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";
import useVhlData from "@/data/hook/useVhlContext";
import DialogExcluir from "@/components/shared/DialogExcluir";
import ModalForm from "@/components/Modal/ModalForm";
import FormVhl from "../Formulario/FormVHL";

interface TabelaVhlProps {
    dados?: any[]
}

export default function TabelaVhl(props: TabelaVhlProps) {

    const { data } = useGncData()
    const { abrirRemove, confirmeRemove, setExcluir, excluir, vl, setVl, openM, setOpenM } = useVhlData()

    function renderRows() {
        return data?.map((registro: any, i: number) => {
            return (
                <tr key={registro.id} className={`${intercalado(i)} text-center`}>
                    <td className="">{dataNova(registro.Data)}</td>
                    <td className="">{registro.Pedido}</td>
                    <td className="">{registro.Cliente}</td>
                    <td className="">{registro.Servico}</td>
                    <td>{registro.Equipamento.map((reg: any) => {
                        return (
                            <>
                                <span style={{ fontSize: 12 }}>NS: {reg.NS}</span>
                                <br />
                            </>
                        )
                    })}</td>
                    <td className="">{registro.QTDE}</td>
                    <td className="">{registro.Tecnico}</td>
                    <td className="">
                        <div className="flex justify-around h-12">
                            <Botao
                                className="
                                    transition-all bg-yellow-500  text-white px-3 py-2 rounded-lg
                                    border-yellow-600
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                                    "
                                executar={() => setOpenM!(!openM)}
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
                                executar={() => abrirRemove!(registro)}
                            >
                                <IconDeletar />
                            </Botao>
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

    function dadosSearch() {
        let dado: any = []

        props.dados?.map((registro: any) =>{
          if(registro.id?.toString().match(vl)){
            dado.push({...registro})
          }else
          if(registro.Pedido?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }else
          if(registro.Cliente?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
          if(registro.Servico?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
          if(registro.Tecnico?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
            registro.Equipamento.map((reg: any) =>{
                if(reg.NS?.toLowerCase().match(vl!.toLowerCase())){
                    dado.push({...registro})
                }
            })
        })
        
        return dado
    }

    return (
        <div className="w-[100%] mt-3">
            <TabelaGnc
                head={<>
                    <th className="rounded-tl-lg p-2">Data</th>
                    <th className="">Pedido</th>
                    <th className="max-sm:hidden">Cliente</th>
                    <th className="max-sm:hidden">Serviço</th>
                    <th className="max-sm:hidden">Equipamento</th>
                    <th className="max-sm:hidden">QTDE</th>
                    <th className="max-sm:hidden">Tecnico</th>
                    <th className="rounded-tr-lg">Ações</th>
                </>}
                tb="w-full"
                dados={props.dados}
                valorBusca={vl}
                busca={dadosSearch}
                novaBusca={setVl!}
            >
                {renderRows()}
            </TabelaGnc>
            <DialogExcluir
                open={excluir!}
                exec={confirmeRemove!}
                close={() => setExcluir!(!excluir)}
            />
            <ModalForm open={openM!} close={() => setOpenM!(!openM)} save={() => console.log("salvar")}>
                <FormVhl />
            </ModalForm>
        </div>
    )
}