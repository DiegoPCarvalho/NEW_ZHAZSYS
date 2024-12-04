import useGncData from "@/data/hook/useGncData";
import Pagination from "../Pagination/Pagination"
import PaginationItem from "../Pagination/PaginationItem";
import Botao from "./Botao";
import Entrada from "./Entrada"
import jsonToCsvExport from 'json-to-csv-export';
import { useState, useEffect } from 'react';
import Selecione from "./Selecione";
import Image from "next/image";

interface TabelaGncProps {
    tb?: string
    id?: string
    head?: any
    dados: any
    pages?: any
    children?: any
    classe?: string
    styles?: object
    page?: number
    active?: any
    export?: boolean
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default function TabelaGnc(props: TabelaGncProps) {
    const { novaData } = useGncData()
    const [banco, setBanco] = useState<any[]>(props.dados);
    const [vl, setVl] = useState<string>("")
    const [total, setTotal] = useState<number>(props.dados?.length)
    const [limite, setLimite] = useState<number>(10)
    const [pages, setPages] = useState<number[]>()
    const [lastPage, setLastPage] = useState<number>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [showPage, setShowPage] = useState<boolean>(true)

    useEffect(() => {        
        const totalPages = Math.ceil(total / limite)
        let resultPages: any = []

        setLastPage(totalPages)

        for (let i = 1; i <= totalPages; i++) {
            resultPages.push(i)
        }
        setPages(resultPages)
    
        paginar(banco, currentPage, +limite)

    }, [currentPage, limite])

    function renderBuscando() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Image src={""} alt="" style={estilo} />
                <span className="fw-bold mx-2">Aguardando</span>
            </div>
        )
    }

    function buscar(item: any, event: any) {
        let key = event.keyCode

        if (key === 13) {
            const resp = banco.filter((result: any) => {
                if (result.nome === item) {
                    return result
                }
                setShowPage(false)
            })

            const id = banco.find((result: any) => {
                setShowPage(false)
                return result.id === +item
            })

            vl === "" ? paginar(banco, 1, limite) :
                resp.length !== 0 ? novaData!(resp)
                    : id !== undefined ? novaData!([id])
                        : paginar(banco, 1, limite)
        }
    }

    function exportar() {
        jsonToCsvExport({ data: props.dados })
    }

    function novoValor(event: any) {
        setVl(event)
    }

    function paginar(item: any, pageActual: number, limited: number) {
        let result: any = []
        let count: number = (pageActual * limited) - limited
        let delimeter: number = count + limited

        setShowPage(true)

        for (let i = count; i < delimeter; i++) {
            if (item[i] !== undefined) {
                    result.push(item[i]);
                    count++;
                }
        }

        return novaData!(result)
    }

    function novoLimite(event: any) {
        setLimite(event)
        setCurrentPage(1)
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <div>
                    {props.export ? (
                         <Botao className="
                         cursor-pointer transition-all bg-teal-500 dark:bg-teal-700 text-white px-3 py-2 rounded-lg
                         border-teal-600 dark:border-teal-800
                         border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                         active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                     "
                         executar={() => exportar()}>CSV</Botao>
                    ) : false}
                   
                </div>
                <div className="my-2">
                    <Entrada
                        nome="vl"
                        tipo="text"
                        mensagemCampo="Buscar..."
                        buscarPesquisa={(e) => buscar(vl, e)}
                        alterouCampo={(event) => novoValor(event.target.value)}
                        valor={vl}
                    />
                </div>
            </div>
            <div className="bg-white dark:bg-neutral-950 shadow-lg w-full p-1 rounded-lg border-2 border-neutral-200 dark:border-neutral-600">
                <table className={`table-fixed ${props.tb}`} id={props.id}>
                    <thead className="bg-neutral-900 dark:bg-neutral-700">
                        <tr className='font-bold text-white'>
                            {props.head}
                        </tr>
                    </thead>
                    <tbody style={props.styles} className={props.classe}>
                        {props.dados === 0 ?
                            renderBuscando()
                            : props.children
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between max-sm:justify-end">
                {showPage ? (
                    <>
                        <div className="flex items-center max-sm:hidden">
                            <span className="text-lg dark:text-white">Exibir</span>
                            <Selecione 
                                nome="limite"
                                valor={limite}
                                alterouCampo={(e) => novoLimite(e.target.value)}
                            >   
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                                <option>35</option>
                                <option>40</option>
                                <option>45</option>
                                <option>50</option>
                            </Selecione>
                            <span className="ml-2 text-lg dark:text-white">Resultados por página</span>
                        </div>
                        <Pagination dados={props.dados}
                            previus={() => setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)}
                            next={() => setCurrentPage(currentPage === lastPage ? currentPage : currentPage + 1)}
                        >
                            {pages?.map((page: any) => {
                                return (
                                    <PaginationItem key={page} item={page} page={currentPage} funcao={() => setCurrentPage(page)} />
                                )
                            })}
                        </Pagination>
                    </>
                ) : false}
            </div>
        </div>
    )
}
