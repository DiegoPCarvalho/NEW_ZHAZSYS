import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';
import { useState } from "react";
import { AdminGnc, initialAdminGnc } from "@/data/interfaces/AdminGnc";
import Botao from "@/components/shared/Botao";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";
import DialogExcluir from "@/components/shared/DialogExcluir";


interface TabelaEquipamentosProps {
  dados: any[]
  load: (novoValor: AdminGnc) => void
  remove: (dado: AdminGnc) => void
}

export default function TabelaEquipamentos(props: TabelaEquipamentosProps) {
  const { data } = useGncData()
  const [excluir, setExcluir] = useState<boolean>(false)
  const [dado, setDado] = useState<AdminGnc>(initialAdminGnc)

  function renderRows() {
    return data?.map((registro: any, i: number) => {
      return (
        <tr key={registro.id} className={`${intercalado(i)} text-center`}>
          <td className="">{registro.id}</td>
          <td className="">{registro.nome}</td>
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

  function intercalado(i: number){
    let resultado = i % 2

    return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
}

function abrir(registro: AdminGnc) {
  setExcluir(true)
  setDado(registro)
}

function concluirExcluir(){
  props.remove!(dado)
  setExcluir(false)
  setDado(initialAdminGnc)
}

  return (
    <div className="w-[100%] mt-3">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2">id</th>
            <th className="">Equipamento</th>
            <th className="rounded-tr-lg">Ações</th>
          </>
        }
        tb="w-full"
        classe="border-separate border-spacing-2"
        dados={props.dados}
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

