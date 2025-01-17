import GraficoGNC from "@/components/Grafico/Grafico";

interface GraficoHomeProps {
    categoria?: Array<string>
    dado: any
    tipo?: string
    formate?: string
    texto?: string
    titulo?: string
    subTitulo?: string
    vertical?: number
    horizontal?: number
    serieDado?: any
    size?: string
    cor?: boolean
}

export default function GraficoHome(props: GraficoHomeProps){
    return (
        <div className="grow m-2 bg-white rounded-lg shadow-lg dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                <GraficoGNC
                    tipo={props.tipo}
                    titulo={props.titulo}
                    subTitulo={props.subTitulo}
                    formate={props.formate}
                    texto={props.texto}
                    cor={props.cor}
                    size={props.size}
                    legenda={false}
                    vertical={props.vertical}
                    horizontal={props.horizontal}
                    mudar={false}
                    dado={props.dado}
                    serie={props.serieDado}
                />
            </div>
    )
}