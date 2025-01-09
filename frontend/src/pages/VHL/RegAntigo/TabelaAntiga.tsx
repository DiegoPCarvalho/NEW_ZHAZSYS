import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from "@/data/hook/useGncData";
import { dataNova } from "@/data/functions/DataNova";
import { useState } from "react";

interface TabelaAntigaVhlProps {
    dados?: any[]
}

export default function TabelaAntigaVhl(props: TabelaAntigaVhlProps) {

    const { data } = useGncData()
    const [vl, setVl] = useState<string>("")

    function renderRows() {
        return data?.map((registro: any, i: number) => {
            return (
                <tr key={registro.id} className={`${intercalado(i)} text-center`}>
                    <td className="">{registro.id}</td>
                    <td className="max-sm:hidden">{dataNova(registro.Data)}</td>
                    <td className="">{registro.Pedido}</td>
                    <td className="max-sm:hidden">{registro.Cliente}</td>
                    <td className="max-sm:hidden">{registro.Servico}</td>
                    <td className="max-sm:hidden">{registro.Equipamento?.map((reg: any) => {
                        return (
                            <>
                                <span style={{ fontSize: 12 }}>NS: {reg.NS}</span>
                                <br />
                            </>
                        )
                    })}</td>
                    <td className="max-sm:hidden">{registro.QTDE}</td>
                    <td className="">{registro.Tecnico}</td>
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
                    <th className="rounded-tl-lg p-2">Index</th>
                    <th className="max-sm:hidden">Data</th>
                    <th className="">Pedido</th>
                    <th className="max-sm:hidden">Cliente</th>
                    <th className="max-sm:hidden">Serviço</th>
                    <th className="max-sm:hidden">Equipamento</th>
                    <th className="max-sm:hidden">QTDE</th>
                    <th className="rounded-tr-lg">Tecnico</th>
                </>}
                tb="w-full"
                dados={props.dados}
                valorBusca={vl}
                busca={dadosSearch}
                novaBusca={setVl}
            >
                {renderRows()}
            </TabelaGnc>
        </div>
    )
}