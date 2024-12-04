import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from './../../../data/hook/useGncData';



interface TabelaEquipamentosProps {
  dados?: any[]
}

export default function TabelaEquipamentos(props: TabelaEquipamentosProps) {
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

  function intercalado(i: number){
    let resultado = i % 2

    return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
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
    </div>
  )
}

