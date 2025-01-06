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
                    serie={[
                        {
                            name: "Limpeza",
                           y: 6805
                        },
                        {
                            name: "Manutenção Concluída",
                           y: 9157
                        },
                        {
                            name: "Recuperação de Placa",
                           y: 594
                        },
                        {
                            name: "Laudo",
                           y: 8478
                        },
                        {
                            name: "Revisão de Manutenção",
                           y: 513
                        },
                        {
                            name: "Revisão/Manutenção de Locação",
                           y: 21
                        },
                        {
                            name: "Revisão de Venda",
                           y: 35
                        },
                        {
                            name: "Suporte Remoto",
                           y: 1104
                        },
                        {
                            name: "Chamado On-Site",
                           y: 240
                        },
                        {
                            name: "Confecção de Cabos",
                           y: 28
                        },
                        {
                            name: "Revisão de Compra",
                           y: 15
                        },
                        {
                            name: "Montagem/Manutenção de Venda",
                           y: 3
                        },
                        {
                            name: "Expedicao e Faturamento",
                           y: 2
                        },
                        {
                            name: "Retorno de Locação",
                           y: 2
                        },
                        {
                            name: "undefined",
                           y: 42
                        },
                        {
                            name: "Preventiva",
                           y: 64
                        },
                        {
                            name: "On-Site",
                           y: 2
                        }
                    ]
                    }
                />
            </div>
    )
}