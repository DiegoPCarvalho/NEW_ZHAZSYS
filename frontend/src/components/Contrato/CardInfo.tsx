interface CardInfoProps{
    titulo?: string
    icone?: any
    info?: string | number
    className?: string
}

export default function CardInfo(props: CardInfoProps){
    return(
        <div className={`flex flex-col ${props.className} rounded-lg border  shadow-lg w-56 h-[140px] max-sm:w-[100%]`}>
            <div className="font-bold text-3xl flex justify-center h-[50%] items-center">{props.titulo}</div>
            <div className="flex justify-between  h-[50%] overflow-auto">
                <div className="w-[30%] flex items-center justify-center">{props.icone}</div>
                <div className="w-[50%] flex  items-end mb-5 ml-3 text-2xl justify-center">{props.info}</div>
            </div>
        </div>
    )
}