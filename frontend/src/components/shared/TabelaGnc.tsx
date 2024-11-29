import Entrada from "./Entrada"

interface TabelaGncProps {
    tb?: string
    id?: string
    head?: any
    dados?: any
    children?: any
    classe?: string
    styles?: object
    valor?: any
    executar?: () => void
    mudou?: (novoValor: any) => void
}

const estilo = {
    height: 70,
    width: 70,
    borderRadius: '50%'
}

export default function TabelaGnc(props: TabelaGncProps) {

    function renderBuscando() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <img src={""} alt="" style={estilo} />
                <span className="fw-bold mx-2">Aguardando</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div>
                    export
                </div>
                <div className="my-2">
                    <Entrada
                        nome="vl" 
                        tipo="text"
                        mensagemCampo="Buscar..."
                        buscarPesquisa={props.executar}
                        alterouCampo={props.mudou}
                        valor={props.valor}
                    />
                    {/* <button onClick={props.executar}>busca</button> */}
                </div>
            </div>
            <div className="bg-white dark:bg-zinc-950 shadow-lg w-full p-1 rounded-lg border-2 border-neutral-200 dark:border-neutral-600">
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
            <div className="flex justify-end">
                pagination
            </div>
        </div>
    )
}
