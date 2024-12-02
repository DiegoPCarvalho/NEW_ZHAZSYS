import Botao from "../shared/Botao"

interface PaginationItemProps {
    item?: number
    page?: number
    funcao?: any
}

export default function PaginationItem(props: PaginationItemProps){

    return (
        <div className="ml-1">
            <Botao executar={props.funcao} className={`${props.page === props.item ? "bg-emerald-600 rounded-full text-white" : ""} hover:bg-emerald-600 px-3 py-1 hover:rounded-full dark:text-white hover:text-white`}>{props.item}</Botao>
        </div>
    )
}