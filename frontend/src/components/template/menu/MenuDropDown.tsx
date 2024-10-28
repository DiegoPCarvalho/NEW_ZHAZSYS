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
            hover:bg-netural-500
            hover:bg-neutral-500
            dark:hover:bg-neutral-700
            hover:rounded
            cursor-pointer
            mt-3
            ${props.down ? "bg-neutral-500 rounded dark:bg-neutral-700" : ""}
          `}
        >
            <div className="flex items-center hover:text-white text-neutral-300 px-2 w-40 h-12" onClick={props.executar}>
                <div>
                    {props.icone}
                </div>
                <div className={`text-lg font-bold ml-2 ${props.down ? "text-neutral-100" : ""}`}>
                    {props.texto}
                </div>
                <div className={`${props.classe} ${props.down ? "rotate-90" : ""}`}>
                    {props.marcacao}
                </div>
            </div>
            {props.down ?
                (
                    <div className="bg-neutral-700 dark:bg-neutral-900">
                        {props.children}
                    </div>
                ) : false
            }
        </div>
    )
}