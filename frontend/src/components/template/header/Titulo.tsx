interface TituloProps {
    icone: any
    texto: string
    className?: string
} 

export default function Titulo(props: TituloProps){
    return (
        <div className={`flex items-center ${props.className}`}>
              <div className="text-gray-800">{props.icone}</div>
              <div className="ml-2 text-gray-800 font-bold text-2xl">{props.texto}</div>  
        </div>
    )
}