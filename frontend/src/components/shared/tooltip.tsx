interface TooltipProps {
    nome: string 
    children?: any
    
}

export default function Tooltip(props: TooltipProps) {
    return (
        <div className="shadow-md group relative p-2 bg-emerald-600 dark:bg-emerald-900 rounded-full hover:bg-emerald-500 dark:hover:bg-emerald-700">
            {props.children}
            <div
                className="bg-emerald-500 dark:bg-emerald-700 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2"
            >
                <span className="text-white font-bold whitespace-nowrap">{props.nome}</span>
                <div
                    className="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
                ></div>
            </div>
        </div>
    )
}