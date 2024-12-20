import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';
import Botao from "@/components/shared/Botao";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";
import { initialUser, Usuario } from "@/data/interfaces/Usuario";
import { useState } from "react";
import DialogExcluir from "@/components/shared/DialogExcluir";


interface TabelaUsersProps {
  dados?: any[]
  load?: (novoValor: Usuario) => void
  remove?: (dado: Usuario) => void
}

export default function TabelaUsers(props: TabelaUsersProps) {
  const { data } = useGncData()
  const [excluir, setExcluir] = useState<boolean>(false)
  const [dado, setDado] = useState<Usuario>(initialUser)
  const [vl, setVl] = useState<string>("")

  function renderRows() {
    return data?.map((registro: any, i: number) => {
      return (
        <tr key={registro.id} className={`${intercalado(i)} text-center `}>
          <td className="">{registro.id}</td>
          <td className="">{registro.nomeCompleto}</td>
          <td className="max-sm:hidden">{registro.email}</td>
          <td className="max-sm:hidden">{registro.departamento}</td>
          <td className="max-sm:hidden">{registro.contrato}</td>
          <td className="max-sm:hidden">{registro.especialidade}</td>
          <td className="max-sm:hidden">{registro.acesso}</td>
          <td className="">
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

  function intercalado(i: number) {
    let resultado = i % 2

    return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
  }

  function abrir(registro: Usuario) {
    setExcluir(true)
    setDado(registro)
  }

  function concluirExcluir() {
    props.remove!(dado)
    setExcluir(false)
    setDado(initialUser)
  }

  function dadosSearch() {
      let dado: any = []
      props.dados?.map((registro: any) =>{
        if(registro.id?.toString().match(vl)){
          dado.push({...registro})
        }else
        if(registro.nomeCompleto?.toLowerCase().match(vl.toLowerCase())){
          dado.push({...registro})
        }else
        if(registro.departamento?.toLowerCase().match(vl.toLowerCase())){
          dado.push({...registro})
        }else
        if(registro.contrato?.toLowerCase().match(vl.toLowerCase())){
          dado.push({...registro})
        }else
        if(registro.especialidade?.toLowerCase().match(vl.toLowerCase())){
          dado.push({...registro})
        }else
        if(registro.email?.toLowerCase().match(vl.toLowerCase())){
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
            <th className="rounded-tl-lg p-2 w-10">id</th>
            <th className="p-2">Nome</th>
            <th className="max-sm:hidden">E-mail</th>
            <th className="max-sm:hidden">Departamento</th>
            <th className="max-sm:hidden">Contrato</th>
            <th className="max-sm:hidden">Especialidade</th>
            <th className="max-sm:hidden">Acesso</th>
            <th className="rounded-tr-lg">Ações</th>
          </>
        }
        tb="w-full"
        dados={props.dados}
        busca={dadosSearch}
        valorBusca={vl}
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