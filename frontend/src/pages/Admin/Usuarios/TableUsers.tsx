import TabelaGnc from "@/components/shared/TabelaGnc";
import { useEffect, useState } from 'react';
import jsonToCsvExport from "json-to-csv-export";

export default function TabelaUsers() {

  const [data, setData] = useState<any[]>(dado);
  const [vl, setVl] = useState<string>("")
  const [total, setTotal] = useState<number>(dado.length)
  const [limite, setLimite] = useState<number>(7)
  const [page, setPage] = useState<number[]>()
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    setTotal(dado.length)
    const totalPages = Math.ceil(total / limite)

    let resultPages: any = []

    for (let i = 1; i <= totalPages; i++) {
      resultPages.push(i)
    }
    setPage(resultPages)

    listar(dado, currentPage, limite)

  }, [currentPage])

  function listar(item: any, pageActual: number, limited: number) {
    let result: any = []
    let totalPage: number = Math.ceil(total / limited)
    let count: number = (pageActual * limited) - limited
    let delimeter: number = count + limited

    if (pageActual <= totalPage) {
      for (let i = count; i < delimeter; i++) {
        if (item[i] !== undefined) {
          result.push(item[i]);
          count++;
        }
      }
    }

    return setData(result)
  }

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

  function exportar(){
    jsonToCsvExport({data: dado})
  }

  function buscar(item: any, event: any) {
    let key = event?.keyCode

    if (key === 13) {
      const resp = dado.filter((result: any) => {
          if (result.nome === item) {
              return result
          }
      })
      
      const id = dado.find((result: any) => result.id === +item)

      console.log(id)

      vl === "" ? listar(dado, currentPage, limite) :
      resp.length !== 0 ? setData(resp)
        : id !== undefined ? setData([id])
          : listar(dado, currentPage, limite)
    }
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
        executar={(e) => buscar(vl, e)}
      >
        {renderRows()}
      </TabelaGnc>

      <div>
        {total}
        {page?.map((pag: any) => {
          return (
            <button className="bg-green-500 mx-2" key={pag} onClick={() => setCurrentPage(pag)}>{pag}</button>
          )
        })}
      </div>
      <button onClick={() => exportar()}>exportar</button>
    </div>
  )
}


const dado = [
  { id: 1, nome: "123" },
  { id: 2, nome: "456" },
  { id: 53, nome: "789" },
  { id: 52, nome: "789" },
  { id: 54, nome: "789" },
  { id: 55, nome: "789" },
  { id: 56, nome: "789" },
  { id: 57, nome: "789" },
  { id: 58, nome: "789" },
  { id: 59, nome: "789" },
  { id: 60, nome: "789" },
  { id: 61, nome: "789" },
]