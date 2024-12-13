import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';
import Botao from "@/components/shared/Botao";
import { IconAlterar, IconDeletar } from "@/components/icons/IconesMaterial";
import { Usuario } from "@/data/interfaces/Usuario";


interface TabelaUsersProps {
  dados?: any[]
  load?: (novoValor: Usuario) => void
  remove?: (dado: Usuario) => void
}

export default function TabelaUsers(props: TabelaUsersProps) {
  const { data } = useGncData()

  function renderRows() {
    return data?.map((registro: any, i: number) => {
      return (
        <tr key={registro.id} className={`${intercalado(i)} text-center `}>
          <td className="h-14">{registro.id}</td>
          <td className="">{registro.nomeCompleto}</td>
          <td className="max-sm:hidden">{registro.email}</td>
          <td className="max-sm:hidden">{registro.departamento}</td>
          <td className="max-sm:hidden">{registro.departamento}</td>
          <td className="max-sm:hidden">{registro.departamento}</td>
          <td className="max-sm:hidden">{registro.departamento}</td>
          <td className="max-sm:hidden">
            <div className="flex justify-around">
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
                executar={() => props.remove!(registro)}
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

  return (
    <div className="w-[100%]">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2 w-[5%]">id</th>
            <th className="">Nome</th>
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
      >
        {renderRows()}
      </TabelaGnc>
    </div>
  )
}

