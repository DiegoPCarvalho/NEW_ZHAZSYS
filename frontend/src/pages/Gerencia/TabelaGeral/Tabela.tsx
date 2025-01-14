import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';
import { dataNova } from './../../../data/functions/DataNova';
import { useState } from 'react';
import { Tempo } from "@/data/functions/Tempo";

interface TabelaUsersProps {
  dados?: any[]
}

export default function TabelaGen(props: TabelaUsersProps){
    const { data } = useGncData()
    const [vl, setVl] = useState<string>("")

  function renderRows() {
    return data?.map((registro: any, i: number) => {
      return (
        <tr key={registro.id} className={`${intercalado(i)} text-center`}>
          <td className="">{dataNova(registro.Data)}</td>
          <td className="">{registro.OS}</td>
          <td className="max-sm:hidden">{registro.Cliente}</td>
          <td className="">{registro.Servico}</td>
          <td className="max-sm:hidden">{registro.Contrato}</td>
          <td className="max-sm:hidden">{registro.Placa}</td>
          <td className="max-sm:hidden">{registro.Equipamento}</td>
          <td className="max-sm:hidden">{registro.Tecnico}</td>
          <td className="max-sm:hidden">{Tempo(registro.DataInicialBruto, registro.DataFinalBruto)}</td>
          <td className="max-sm:hidden">{registro.TempoLiquido ? registro.TempoLiquido : "00:00:00"}</td>
          <td className="max-sm:hidden">{Tempo(registro.DataInicialProblema, registro.DataFinalProblema)}</td>
          <td className="max-sm:hidden">{registro.ProblemObs}</td>
        </tr>
      )
    })
  }

  function intercalado(i: number){
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
      if(registro.Tecnico?.toLowerCase().match(vl!.toLowerCase())){
        dado.push({...registro})
      }
      if(registro.Contrato?.toLowerCase().match(vl!.toLowerCase())){
        dado.push({...registro})
      }
    })
    
    return dado
}

  return (
    <div className="w-[100%]">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2">Data</th>
            <th className="">OS</th>
            <th className="max-sm:hidden">Cliente</th>
            <th className="max-sm:rounded-tr-lg">Serviço</th>
            <th className="max-sm:hidden">Contrato</th>
            <th className="max-sm:hidden">Rec. Placa</th>
            <th className="max-sm:hidden">Equip.</th>
            <th className="max-sm:hidden">Técnico</th>
            <th className="max-sm:hidden">Tempo Bruto</th>
            <th className="max-sm:hidden">Tempo Liquido</th>
            <th className="max-sm:hidden">Tempo Problema</th>
            <th className="rounded-tr-lg max-sm:hidden">Obs. Problema</th>
          </>
        }
        tb="w-full"
        dados={props.dados}
        export
        valorBusca={vl}
        busca={dadosSearch}
        novaBusca={setVl}
      >
        {renderRows()}
      </TabelaGnc>
    </div>
    )
}