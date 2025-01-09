import useGncData from "@/data/hook/useGncData";
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Botao from "./Botao";
import Entrada from "./Entrada"
import jsonToCsvExport from 'json-to-csv-export';
import { useState, useEffect } from 'react';
import Selecione from "./Selecione";
import useAppData from "@/data/hook/useAppData";
import Carregando from '@/components/shared/Carregando';

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
    valorBusca?: string
    busca: any
    novaBusca: (novoValor: any) => void
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default function TabelaGnc(props: TabelaGncProps) {
    const { novaData } = useGncData()
    const { tema } = useAppData()
    const [total, setTotal] = useState<number>(0)
    const [limite, setLimite] = useState<number>(10)
    const [pages, setPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [showPage, setShowPage] = useState<boolean>(true)

    async function inicio() {
        await setTotal(props.dados.length)
        const totalPages = Math.ceil(total / limite)

        setPages(totalPages)
    }

    useEffect(() => {
        inicio()
        paginar(props.dados, currentPage, +limite)

    }, [currentPage, limite, props.dados, total])


    function renderBuscando() {
        return (
            <div className="flex items-center">
                <Carregando cor="success" tamanho={60}/>
                <span className="font-bold ml-2 dark:text-white">Aguardando</span>
            </div>
        )
    }

    function buscar(item: any, event: any) {
        let key = event.keyCode

        if (key === 13) {
            props.valorBusca === "" ? paginar(props.dados, 1, limite) :
                props.dados?.length !== 0 ? novaData!(props.busca) :
                    props.busca?.length === 0 ? novaData!(props.dados)
                        : paginar(props.dados, 1, limite)

        }
    }

    function exportar() {
        jsonToCsvExport({ data: props.dados })
    }

    const theme = createTheme({
        palette: {
            mode: 'dark', // Set to 'dark' for dark mode, 'light' for light mode
            primary: {
                main: '#ffffff', // Define the primary color for Pagination in dark mode
            },
            background: {
                paper: '#121212', // Define the background color for Pagination in dark mode
            },
        },
    });

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

    const MudarPagina = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

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
                        buscarPesquisa={(e) => buscar(props.valorBusca, e)}
                        alterouCampo={(event) => props.novaBusca(event.target.value)}
                        valor={props.valorBusca}
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
                        {props.dados?.length === 0 ?
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
                        <div className="mt-3 dark:text-white">
                            <ThemeProvider theme={tema === "dark" ? theme : {}}>
                                <Pagination siblingCount={0} variant="text" color={"standard"} shape="rounded" count={pages} page={currentPage} onChange={MudarPagina} />
                            </ThemeProvider>
                        </div>
                    </>
                ) : false}
            </div>
        </div>
    )
}
