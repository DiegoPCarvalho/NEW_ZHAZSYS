import GraficoLab from "./(Graficos)/GraficoLab";

interface GraficoProps {
    dadoServico?: any
    dadoEquipamento?: any
    dadoSerieServico?: any
}

export default function GraficosLab(props: GraficoProps){
    return (
        <div className="flex flex-col justify-between max-sm:grid max-sm:grid-cols-1 h-full w-full">
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <div className="max-sm:w-[100%] mr-3">
                    <GraficoLab
                        dado={props.dadoServico}
                        titulo="Serviço"
                        vertical={300} 
                        tipo="pie"
                        formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                        texto='<b>{point.name}</b>: {point.percentage:.1f} %'
                        serieDado={props.dadoSerieServico}
                    />
                </div>
                <div className="max-sm:w-[100%]">
                    <GraficoLab
                        dado={props.dadoServico} 
                        tipo="column"
                        titulo="Serviço"
                        vertical={300}
                        formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                        texto='{point.y:1f}'
                        serieDado={props.dadoSerieServico}
                    />
                    </div>
            </div>
            <div className="grid grid-cols-1 max-sm:w-full mt-2">
                <GraficoLab
                    dado={props.dadoEquipamento} 
                    tipo="column"
                    titulo="Equipamento"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                />
            </div>
        </div>
    )
}