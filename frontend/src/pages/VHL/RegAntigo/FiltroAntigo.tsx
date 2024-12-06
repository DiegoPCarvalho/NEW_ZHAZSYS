import Botao from "@/components/shared/Botao";
import Selecione from "@/components/shared/Selecione";

export default function FiltroAntigo(){
    return(
        <div className="flex justify-center items-end max-sm:items-center w-[45%]">
             <Selecione
                    texto="Mês:"
                    nome="Mes"
                    className="w-28"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Selecione>
                <Selecione
                    texto="Ano:"
                    nome="Ano"
                    className="w-28"
                >
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                </Selecione>
                <div className="flex items-end ml-3 max-sm:h-16">
                <Botao
                    className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                    executar={() => console.log("")}
                >Buscar</Botao>
            </div>
        </div>
    )
}