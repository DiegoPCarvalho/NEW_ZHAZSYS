

interface AddItemProps {
    icone: any
    voltar?: boolean
    executar?: () => void
}

export default function AddItem(props: AddItemProps) {
    return (
        <div className={`cursor-pointer overflow-hidden relative 
            hover:w-32 transition-all duration-200 ease-linear 
            hover:-translate-x-3 w-16 p-2 overflow-y-clip 
            group text-center
            ${props.voltar ? 
                "bg-red-600 hover:bg-red-500 dark:bg-red-700 hover:border-red-800" 
            : "bg-sky-600 hover:bg-sky-500 dark:bg-sky-700 hover:border-sky-800"}
             rounded-full 
            flex justify-center items-center text-neutral-200 hover:text-white
            hover:rounded-xl hover:justify-between 
            hover:border-b-[6px] active:border-b-[2px] active:duration-75
            active:brightness-90 active:translate-y-[2px]
            `} onClick={props.executar}>
            <div className="absolute flex items-center justify-center">
                <props.icone sx={{ fontSize: 40}} />
            </div>
            <div className={`relative  ${props.voltar ? "ml-3 -right-28" : "ml-4 -right-24"} font-bold text-2xl flex items-center  transition-all duration-300 transform -translate-x-1/2 group-hover:-right-16`}>
                {props.voltar ? "Voltar" : "Novo"}
            </div>
        </div>
    )
}