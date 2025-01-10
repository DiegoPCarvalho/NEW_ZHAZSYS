import GraficoGNC from "@/components/Grafico/Grafico";

interface GraficoContratoProps {
    categoria?: Array<string>
    dado: any
    tipo?: string
    formate?: string
    texto?: string
    titulo?: string
    vertical?: number
    serieDado?: any
}

export default function GraficoContrato(props: GraficoContratoProps){
    return (
        <div className="bg-white rounded-lg shadow-lg dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                <GraficoGNC
                    tipo={props.tipo}
                    titulo={props.titulo}
                    formate={props.formate}
                    texto={props.texto}
                    cor={true}
                    legenda={false}
                    vertical={props.vertical}
                    mudar={false}
                    dado={props.dado}
                    serie={props.serieDado}
                    />
            </div>
    )
}