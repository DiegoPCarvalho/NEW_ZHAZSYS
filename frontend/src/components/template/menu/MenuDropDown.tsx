import { useState } from "react"

interface MenuDropDownProps {
    icone?: any
    texto?: string
    marcacao?: any
    children?: any
}

export default function MenuDropDown(props: MenuDropDownProps) {

    const [down, setDown] = useState(false)

    return (
        <div className={`
            flex flex-col 
            hover:bg-netural-500
            hover:bg-neutral-500
            dark:hover:bg-neutral-700
            hover:rounded
            cursor-pointer
            mt-3
            ${down ? "bg-neutral-500 rounded dark:bg-neutral-700" : ""}
          `}
        >
            <div className="flex items-center ml-3 hover:text-white text-neutral-300 px-2 w-40 h-12" onClick={() => setDown(!down)}>
                <div>
                    {props.icone}
                </div>
                <div className={`text-lg font-bold ml-2 ${down ? "text-neutral-100" : ""}`}>
                    {props.texto}
                </div>
                <div className={`ml-8 ${down ? "rotate-90" : ""}`}>
                    {props.marcacao}
                </div>
            </div>
            {down ?
                (
                    <div className="bg-neutral-700 dark:bg-neutral-900">
                        {props.children}
                    </div>
                ) : false
            }
        </div>
    )
}