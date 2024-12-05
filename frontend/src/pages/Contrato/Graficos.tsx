import GraficoEquipamento from "./(Graficos)/GraficoEquipamento";

export default function Graficos(){
    return (
        <div className="flex flex-col w-[100%] h-[100%]  max-sm:grid max-sm:grid-cols-1">
            <div className="flex w-[100%] h-[50%] max-sm:grid max-sm:grid-cols-1">
                <div className="w-[50%] max-sm:w-[100%]"><GraficoEquipamento /></div>
                <div className="w-[50%] max-sm:w-[100%]"><GraficoEquipamento /></div>
            </div>
            <div className="h-[50%] w-[100%]"><GraficoEquipamento /></div>
        </div>
    )
}