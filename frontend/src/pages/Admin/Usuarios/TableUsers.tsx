import TabelaGnc from "@/components/shared/TabelaGnc";
import { useState } from 'react';

export default function TabelaUsers() {

  const [data, setData] = useState<any[]>(dado);
  const [vl, setVl] = useState<string>("")
  const [total, setTotal] = useState<number>(dado.length)
  const [limite, setLimite] = useState<number>(3)

  function renderRows() {
    return data.map((registro: any) => {
      return (
        <tr key={registro.id} className="border dark:text-white">
          <td className="border">{registro.id}</td>
          <td className="border">{registro.nome}</td>
        </tr>
      )
    })
  }

  function buscar(item: any) {
    const resp = data.find((result: any) => result.nome === item)
    const id = data.find((result: any) => result.id === +item)

    resp !== undefined ? setData([resp])
      : id !== undefined ? setData([id])
      : setData(dado)
  }

  function novoValor(event: any) {
    setVl(event)
  }

  return (
    <div className="w-[100%] mt-3">
      <TabelaGnc
        head={
          <>
            <th className="rounded-tl-lg p-2">id</th>
            <th className="rounded-tr-lg">atividade</th>
          </>
        }
        tb="w-full"
        classe=""
        dados={data}
        valor={vl}
        mudou={(event) => novoValor(event.target.value)}
        executar={() => buscar(vl)}
      >
        {renderRows()}
      </TabelaGnc>

      <div>
        {total}
      </div>
    </div>
  )
}


const dado = [
  { id: 1, nome: "123" },
  { id: 2, nome: "456" },
  { id: 53, nome: "789" },
  { id: 53, nome: "789" },
  { id: 53, nome: "789" },
  { id: 53, nome: "789" },
]