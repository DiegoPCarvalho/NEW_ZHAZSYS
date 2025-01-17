interface CardHomeProps {
    titulo: string
    icone: any
    corIcone: string
    qtde: number
}

export default function CardHome(props: CardHomeProps){
    return (
        <div className="flex w-72 max-[1024px]:w-44 justify-between h-24 bg-white dark:text-neutral-200 dark:bg-neutral-950 dark:border-neutral-600 border-2 shadow-lg rounded-lg mt-3">
            <div className="flex flex-col justify-evenly ml-2">
                <div className="text-4xl font-bold max-[1024px]:text-lg">{props.titulo}</div>
                <div><span className="font-semibold max-[1024px]:text-sm">QTDE:</span> <span className="text-xl max-[1024px]:text-sm">{props.qtde}</span></div>
            </div>
            <div className="flex items-center mr-2">
               <div className={props.corIcone}>{props.icone}</div>
            </div>
        </div>
    )
}