import GraficoLab from "./(Graficos)/GraficoLab";

export default function GraficosLab(){
    return (
        <div className="flex flex-col justify-between max-sm:grid max-sm:grid-cols-1 h-full w-full">
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <div className="max-sm:w-[100%]"><GraficoLab /></div>
                <div className="max-sm:w-[100%]"><GraficoLab /></div>
            </div>
            <div className="max-sm:w-full"><GraficoLab /></div>
        </div>
    )
}