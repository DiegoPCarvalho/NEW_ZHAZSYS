import GraficoVhl from "./(Graficos)/GraficoVhl";

interface GraficoProps {
    dadoServico?: any
}

export default function GraficosVhl(props: GraficoProps) {
    return (
        <div className="grid grid-cols-2 grow ml-5 max-sm:ml-0 max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]">
            <GraficoVhl
                dado={props.dadoServico}
                titulo="Serviço"
                vertical={400}
                tipo="pie"
                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                texto='<b>{point.name}</b>: {point.percentage:.1f} %'
            />
            <GraficoVhl
                dado={props.dadoServico}
                tipo="column"
                titulo="Serviço"
                vertical={400}
                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                texto='{point.y:1f}'
            />

        </div>
    )
}