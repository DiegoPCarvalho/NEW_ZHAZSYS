interface MenuDropDownProps {
    icone?: any
    texto?: string
    marcacao?: any
    children?: any
    down?: Boolean
    classe?: string
    executar?: () => void
}

export default function MenuDropDown(props: MenuDropDownProps) {

    return (
        <div className={`
            flex flex-col 
            hover:bg-zinc-500
            dark:hover:bg-zinc-700
            hover:rounded
            cursor-pointer
            mt-3
            ${props.down ? "bg-zinc-500 rounded dark:bg-zinc-950" : ""}
          `}
        >
            <div className="flex items-center hover:text-white text-zinc-300 px-2 w-40 h-12" onClick={props.executar}>
                <div>
                    {props.icone}
                </div>
                <div className={`text-lg font-bold ml-2 ${props.down ? "text-zinc-100" : ""}`}>
                    {props.texto}
                </div>
                <div className={`${props.classe} ${props.down ? "rotate-90" : ""}`}>
                    {props.marcacao}
                </div>
            </div>
            {props.down ?
                (
                    <div className="bg-zinc-700 dark:bg-zinc-950">
                        {props.children}
                    </div>
                ) : false
            }
        </div>
    )
}