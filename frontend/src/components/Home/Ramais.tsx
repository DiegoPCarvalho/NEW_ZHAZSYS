import useGncData from "@/data/hook/useGncData";
import Botao from "../shared/Botao";

export default function Ramais() {
    const { openModalHome } = useGncData()

    return (
        <div className="flex flex-col items-center dark:text-neutral-200 h-[95%] ml-1 w-56 bg-white dark:bg-neutral-950 rounded-lg shadow-lg border-2 dark:border-neutral-700">
            <div className="font-bold text-3xl max-[1024px]:text-2xl">Ramais</div>
            <div className="flex flex-col grow justify-evenly">
                <Botao
                    className={`
                    cursor-pointer transition-all bg-stone-500 dark:bg-stone-700 text-white px-5 py-2 rounded-lg
                    border-stone-600 dark:border-stone-800 h-12
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                `}

                    executar={() => openModalHome!("Comercial")}
                >Comercial</Botao>
                <Botao
                    className={`
                    cursor-pointer transition-all bg-stone-500 dark:bg-stone-700 text-white px-5 py-2 rounded-lg
                    border-stone-600 dark:border-stone-800 h-12
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                `}

                    executar={() => openModalHome!("adm")}
                >ADM</Botao>
                <Botao
                    className={`
                    cursor-pointer transition-all bg-stone-500 dark:bg-stone-700 text-white px-5 py-2 rounded-lg
                    border-stone-600 dark:border-stone-800 h-12
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                `}

                    executar={() => openModalHome!("Laboratório")}
                >Laboratório</Botao>
                <Botao
                    className={`
                    cursor-pointer transition-all bg-stone-500 dark:bg-stone-700 text-white px-5 py-2 rounded-lg
                    border-stone-600 dark:border-stone-800 h-12
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                `}

                    executar={() => openModalHome!("Gerência")}
                >Gerência</Botao>
            </div>
        </div>
    )
}