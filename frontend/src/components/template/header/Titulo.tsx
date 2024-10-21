interface TituloProps {
    icone: any
    texto: string
} 

export default function Titulo(props: TituloProps){
    return (
        <div className="flex items-center">
              <div className="text-gray-200">{props.icone}</div>
              <div className="ml-2 text-gray-200 font-bold text-2xl">{props.texto}</div>  
        </div>
    )
}