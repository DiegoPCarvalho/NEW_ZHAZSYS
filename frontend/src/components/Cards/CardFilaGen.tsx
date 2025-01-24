import { IconCheck, IconDeletar, IconInfo } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";

export default function CardsFilaGen(){
    return (
        <div className="flex mt-3 justify-between py-3 px-2 flex-col bg-white dark:bg-neutral-950 border dark:border-neutral-700 shadow-lg rounded-lg">
            <div className="flex justify-between">
                <span className="text-xl font-bold grow"><span className="bg-emerald-700 text-neutral-100 p-1 rounded-lg mr-1">OS:</span>12345</span>
                <span className="text-xl font-bold grow"><span className="bg-blue-700 text-neutral-100 p-1 rounded-lg mr-1">Data:</span> 17/05/2025</span>
                <div className="flex justify-evenly grow">
                    <span className="h-5 w-5 rounded-full bg-black dark:bg-stone-800 dark:border dark:border-stone-600"></span>
                    <span className="h-5 w-5 rounded-full bg-emerald-700"></span> 
                    <span className="h-5 w-5 rounded-full bg-blue-700"></span>  
                    <span className="h-5 w-5 rounded-full bg-red-700"></span> 
                    <span className="h-5 w-5 rounded-full bg-yellow-500"></span>   
                </div>
            </div>
            <div className="flex mt-5 h-14 justify-between">
                <Botao
                            className={`
                            cursor-pointer transition-all bg-neutral-500 dark:bg-neutral-700 text-white px-2 py-1 rounded-lg
                            border-neutral-600 dark:border-neutral-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                    >
                        <IconInfo fontSize="large"/>
                </Botao>
                <Botao
                            className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-2 py-1 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                    >
                        <IconDeletar fontSize="large"/>
                </Botao>
                <Botao
                            className={`
                            cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-2 py-1 rounded-lg
                            border-green-600 dark:border-green-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                    >
                        <IconCheck fontSize="large"/>
                </Botao>
            </div>
        </div>
    )
}