interface CardInfoProps {
    titulo?: string
    icone?: any
    icone2?: any
    info?: string | number
    info2?: string | number
    className?: string
    tempo?: boolean
    limpeza?: boolean
    click?: boolean
    executar?: () => void
}

export default function CardInfo(props: CardInfoProps) {
    return (
        <div onClick={props.executar} className={`flex flex-col justify-between px-2 py-3 ${props.click ? "cursor-pointer" : ""} ${props.className} rounded-lg border  shadow-lg w-56  ${props.limpeza ? "h-[160px]" : "h-[140px]"} max-sm:w-[100%]`}>
            <div className="font-bold text-3xl flex justify-center items-center">{props.titulo}</div>
            <div className={`flex justify-between items-center overflow-auto`}>
                    <div className="flex">{props.icone}</div>
                    <div className={`flex text-2xl justify-end`}>{props.info}</div>
            </div>
            {props.limpeza ? <div className={`mt-1 flex justify-between items-center overflow-auto`}>
                        <div className="flex ">{props.icone2}</div>
                        <div className={`flex text-2xl justify-end`}>{props.info2}</div>
            </div> : false}
        </div>
    )
}