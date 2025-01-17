import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from '../../../data/hook/useGncData';
import { useState } from "react";
import Botao from "@/components/shared/Botao";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";
import DialogExcluir from "@/components/shared/DialogExcluir";
import { Meta, initialMeta } from "@/data/interfaces/MetaGen";


interface TabelaMetaProps {
  dados: any[]
  load: (novoValor: Meta) => void
  remove: (dado: Meta) => void
}

export default function TabelaMeta(props: TabelaMetaProps) {
  const { data } = useGncData()
  const [excluir, setExcluir] = useState<boolean>(false)
  const [dado, setDado] = useState<Meta>(initialMeta)
  const [vl, setVl] = useState<string>("")

  function renderRows() {
    return data?.map((registro: any, i: number) => {
      return (
        <tr key={registro.id} className={`${intercalado(i)} text-center`}>
          <td className="">{registro.id}</td>
          <td className="">{Mes(registro.mes)} / {registro.ano}</td>
          <td className="">{registro.metaOS}</td>
          <td className="">{registro.metaServico}</td>
          <td>
          <div className="flex justify-around h-12">
              <Botao
                className="
                transition-all bg-yellow-500  text-white px-3 py-2 rounded-lg
                border-yellow-600
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                "
                executar={() => props.load!(registro)}
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
                executar={() => abrir(registro)}
              >
                <IconDeletar />
              </Botao>
            </div>
          </td>
        </tr>
      )
    })
  }

  function Mes(dado: string){
    if(dado === "1"){
        return "Jan"
    }
    if(dado === "2"){
        return "Fev"
    }
    if(dado === "3"){
        return "Mar"
    }
    if(dado === "4"){
        return "Abr"
    }
    if(dado === "5"){
        return "Mai"
    }
    if(dado === "6"){
        return "Jun"
    }
    if(dado === "7"){
        return "Jul"
    }
    if(dado === "8"){
        return "Ago"
    }
    if(dado === "9"){
        return "Set"
    }
    if(dado === "10"){
        return "Out"
    }
    if(dado === "11"){
        return "Nov"
    }
    if(dado === "12"){
        return "Dez"
    }
  }

  function intercalado(i: number){
    let resultado = i % 2

    return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
}

function abrir(registro: Meta) {
  setExcluir(true)
  setDado(registro)
}

function concluirExcluir(){
  props.remove!(dado)
  setExcluir(false)
  setDado(initialMeta)
}

function dadosSearch() {
  let dado: any = []
  props.dados?.map((registro: any) =>{
    if(registro.id?.toString().match(vl)){
      dado.push({...registro})
    }else
    if(registro.metaOS?.toString().match(vl.toLowerCase())){
      dado.push({...registro})
    }else
    if(registro.metaServico?.toString().match(vl.toLowerCase())){
      dado.push({...registro})
    }
  })

  return dado
}

  return (
    <div className="w-[100%] mt-3">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2">id</th>
            <th className="">Mes/Ano</th>
            <th className="">Meta OS</th>
            <th className="">Meta Serviço</th>
            <th className="rounded-tr-lg">Ações</th>
          </>
        }
        tb="w-full"
        classe="border-separate border-spacing-2"
        dados={props.dados}
        valorBusca={vl}
        busca={dadosSearch}
        novaBusca={setVl}
      >
        {renderRows()}
      </TabelaGnc>
      <DialogExcluir
        open={excluir}
        exec={concluirExcluir}
        close={() => setExcluir(false)}
      />
    </div>
  )
}

