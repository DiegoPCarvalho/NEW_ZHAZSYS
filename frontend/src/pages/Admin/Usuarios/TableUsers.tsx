import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';

interface TabelaUsersProps {
  dados?: any[]
}

export default function TabelaUsers(props: TabelaUsersProps) {
  const { data } = useGncData()

  function renderRows() {
    return data?.map((registro: any, i: number) => {
      return (
        <tr key={registro.id} className={`${intercalado(i)} text-center`}>
          <td className="">{registro.id}</td>
          <td className="">{registro.nome}</td>
        </tr>
      )
    })
  }

  function intercalado(dado: number) {
    const resultado = dado % 2

    return resultado !== 0 ? "bg-neutral-600 text-white" : "dark:text-white"
  }
  
  return (
    <div className="w-[100%] mt-3">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2">id</th>
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
        classe="border-separate border-spacing-2"
        dados={props.dados}
      >
        {renderRows()}
      </TabelaGnc>
    </div>
  )
}

