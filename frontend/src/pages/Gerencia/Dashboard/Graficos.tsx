import useDashData from "@/data/hook/useDashData";
import GraficoGen from "./(Graficos)/GraficoGen";

export default function Graficos() {

    const { graficoGen } = useDashData();

    return (
        <div id="hiddenScroll" className="ml-5 max-sm:ml-0 flex flex-col justify-evenly overflow-auto w-full max-sm:grid max-sm:grid-cols-1">
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen
                    titulo="Servico OS"
                    tipo="pie"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                    texto='<b>{point.name}</b>: {point.y:1f}'
                    cor
                    dado={graficoGen?.servicoLab}
                    serieDado={graficoGen?.serieServicoLab}
                />
                <GraficoGen 
                    titulo="Servico VHL"
                    tipo="pie"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                    texto='<b>{point.name}</b>: {point.y:1f}'
                    cor
                    dado={graficoGen?.servicoVhl}
                    serieDado={graficoGen?.serieServicoVhl}
                />
            </div>
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen 
                    titulo="Equipamento OS"
                    tipo="column"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    cor
                    dado={graficoGen?.equipamentoLab}
                />
                <GraficoGen 
                    titulo="Equipamento VHL"
                    tipo="column"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    cor
                    dado={graficoGen?.equipamentoVhl}
                />
            </div>
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen 
                    titulo="Produtividade Tec. OS"
                    tipo="bar"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    cor
                    dado={graficoGen?.prodTecLab}
                />
                <GraficoGen 
                    titulo="Produtividade Tec. VHL"
                    tipo="bar"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    cor
                    dado={graficoGen?.prodTecVhl}
                />
            </div>
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen 
                    titulo="Quantidado por Ano OS"
                    tipo="spline"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    dado={graficoGen?.anualLab}
                />
                <GraficoGen 
                    titulo="Quantidado por Ano VHL"
                    tipo="spline"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    dado={graficoGen?.anualVhl}
                />
            </div>
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen 
                    tipo="column" 
                    titulo="Avulso X Contrato"
                    vertical={390}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    cor
                    dado={graficoGen?.contratoAvulso}
                    serieDado={graficoGen?.serieContrato}
                />
                <GraficoGen 
                    tipo="pie" 
                    titulo="Recuperação de Placa"
                    vertical={390}
                    size="60%"
                    subTitulo={`Total de Placas: ${graficoGen?.totalPlaca}`}
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='<b>{point.name}</b>: {point.y:1f}'
                    cor
                    dado={graficoGen?.placa}
                    
                />
            </div>
            <div className="grid grid-cols-1 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen 
                    tipo="column"
                    titulo="Produtividade por dia de OS"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                    texto='{point.y:1f}'
                    dado={graficoGen?.proDiaria}
                />
            </div>
        </div>
    )
}