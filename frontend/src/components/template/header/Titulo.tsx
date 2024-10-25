interface TituloProps {
    icone: any
    texto: string
    className?: string
} 

export default function Titulo(props: TituloProps){
    return (
        <div className={`flex items-center ${props.className}`}>
              <div className="text-neutral-950 dark:text-neutral-200">{props.icone}</div>
              <div className="ml-2 text-neutral-950 font-bold text-2xl dark:text-neutral-200">{props.texto}</div>  
        </div>
    )
}