import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from "@/data/hook/useGncData";
import { dataNova } from './../../../data/functions/DataNova';
import { useState } from 'react';

interface TabelaRaLabProps {
    dados?: any[]
}

export default function TabelaRaLab(props: TabelaRaLabProps) {

    const { data } = useGncData()
    const [vl, setVl] = useState<string>("")
    
    function renderRows() {
        return data?.map((registro: any, i: number) => {
            return (
                <tr key={registro.id} className={`${intercalado(i)} text-center`}>
                    <td className="max-sm:hidden">{registro.id}</td>
                    <td className="">{dataNova(registro.Data)}</td>
                    <td className="">{registro.OS}</td>
                    <td className="max-sm:hidden">{registro.Cliente}</td>
                    <td className="max-sm:hidden">{registro.Equipamento}</td>
                    <td className="max-sm:hidden">{registro.Modelo}</td>
                    <td className="max-sm:hidden">{registro.NS}</td>
                    <td className="">{registro.Servico}</td>
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
          if(registro.OS?.toString().toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }else
          if(registro.Cliente?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
          if(registro.Servico?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
          if(registro.Equipamento?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
          if(registro.Modelo?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
          if(registro.NS?.toLowerCase().match(vl!.toLowerCase())){
            dado.push({...registro})
          }
        })
        
        return dado
    }

    return (
        <div className="flex flex-col mt-3">
            <div className="mt-5">
                <TabelaGnc
                    head={<>
                        <th className="rounded-tl-lg p-2">id</th>
                        <th className="max-sm:hidden">Data</th>
                        <th className="">OS</th>
                        <th className="max-sm:hidden">Cliente</th>
                        <th className="max-sm:hidden">Equipamento</th>
                        <th className="max-sm:hidden">Modelo</th>
                        <th className="max-sm:hidden">NS</th>
                        <th className="rounded-tr-lg">Serviço</th>
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
        </div>
    )
}