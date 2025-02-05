import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';
import { dataNova } from "@/data/functions/DataNova";
import Botao from "@/components/shared/Botao";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";
import { Atividade } from "@/data/interfaces/Atividade";
import ModalForm from "@/components/Modal/ModalForm";
import FormLab from "../Formulario/FormLab";
import { useState } from "react";
import DialogExcluir from "@/components/shared/DialogExcluir";

interface TabelaUsersProps {
  Atividade: Atividade
  openM?: boolean
  dados?: any[]
  excluir: boolean
  concluirExcluir: () => void
  excluirClose: () => void
  mudarCampo: (novoValor: any) => void
  limpar: () => void
  salvar: () => void
  load?: (novoValor: Atividade) => void
  remove: (dado: Atividade) => void
}

export default function TabelaLab(props: TabelaUsersProps) {
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
          <td>
            <div className="flex justify-around h-12">
              {registro.Estagio === "" ?
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
                </Botao> : false}
              <Botao
                className="
                          transition-all bg-red-500  text-white px-3 py-2 rounded-lg
                          border-red-600
                          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                          "
              executar={() => props.remove(registro)}
              >
                <IconDeletar />
              </Botao>
            </div>
          </td>
        </tr>
      )
    })
  }

  function dadosSearch() {
    let dado: any = []

    props.dados?.map((registro: any) => {
      if (registro.id?.toString().match(vl)) {
        dado.push({ ...registro })
      } else
        if (registro.OS?.toString().toLowerCase().match(vl!.toLowerCase())) {
          dado.push({ ...registro })
        } else
          if (registro.Cliente?.toLowerCase().match(vl!.toLowerCase())) {
            dado.push({ ...registro })
          }
      if (registro.Servico?.toLowerCase().match(vl!.toLowerCase())) {
        dado.push({ ...registro })
      }
      if (registro.Equipamento?.toLowerCase().match(vl!.toLowerCase())) {
        dado.push({ ...registro })
      }
      if (registro.Modelo?.toLowerCase().match(vl!.toLowerCase())) {
        dado.push({ ...registro })
      }
      if (registro.NS?.toLowerCase().match(vl!.toLowerCase())) {
        dado.push({ ...registro })
      }
    })

    return dado
  }

  function intercalado(i: number) {
    let resultado = i % 2

    return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
  }

  return (
    <div className="w-[100%]">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2">id</th>
            <th className="max-sm:hidden">Data</th>
            <th className="">OS</th>
            <th className="max-sm:hidden">Cliente</th>
            <th className="max-sm:hidden">Equipamento</th>
            <th className="max-sm:hidden">Modelo</th>
            <th className="max-sm:hidden">NS</th>
            <th className="max-sm:hidden">Serviço</th>
            <th className="rounded-tr-lg">Ações</th>
          </>
        }
        tb="w-full"
        dados={props.dados}
        valorBusca={vl}
        busca={dadosSearch}
        novaBusca={setVl}
      >
        {renderRows()}
      </TabelaGnc>
        <ModalForm open={props.openM} className="top-36 left-[25%] max-xl:left-[20%]">
          <FormLab Atividade={props.Atividade} mudarCampo={(e) => props.mudarCampo(e)} limpar={props.limpar} salvar={props.salvar} />
        </ModalForm>
      <DialogExcluir
        open={props.excluir}
        exec={props.concluirExcluir}
        close={props.excluirClose}
      />
    </div>
  )
}