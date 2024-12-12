import GraficoGNC from "@/components/Grafico/Grafico";

export default function GraficoGen(){
    return (
        <div className="m-2 bg-white rounded-lg shadow-lg dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                <GraficoGNC
                    tipo="column" 
                    titulo="Conversão"
                    formate='<span style="color:{point.color}">{series.name}</span> - <b>{point.y:1f}%'
                    texto='<b>{point.y:1f}</b>%{point.percent:1f}'
                    cor={true}
                    legenda={false}
                    categoria={['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago']}
                    vertical={300}
                    mudar={true}
                    serie={[{
                        name: '%Led>Oportunidade',
                        data: [49,59,38,40,46,31]
                    },{
                        name: '%Oportunidade>Venda',
                        data: [40,43,48,39,44,48]
                    }]
                    }
                />
            </div>
    )
}