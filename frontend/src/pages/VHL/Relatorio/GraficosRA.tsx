import GraficoServico from "./(Graficos)/GraficoServico";

export default function GraficosRA(){
    return(
        <div className="grid grid-cols-2 grow ml-5 max-sm:ml-0 max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]">
            <GraficoServico />
            <GraficoServico />
        </div>
    )
}