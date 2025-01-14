import GraficoGen from "./(Graficos)/GraficoGen";

export default function Graficos() {
    return (
        <div className="ml-5 max-sm:ml-0 flex flex-col justify-evenly overflow-auto w-full max-sm:grid max-sm:grid-cols-1">
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen />
                <GraficoGen />
            </div>
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen />
                <GraficoGen />
            </div>
            <div className="grid grid-cols-2 max-sm:grid max-sm:grid-cols-1">
                <GraficoGen />
                <GraficoGen />
            </div>
        </div>
    )
}