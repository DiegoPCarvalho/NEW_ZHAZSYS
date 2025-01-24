import useGncData from "@/data/hook/useGncData";
import { IconDelFila, IconFilas } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import Selecione from "../shared/Selecione";
import CardsFilaGen from "../Cards/CardFilaGen";
import useFilaData from "@/data/hook/useFilaData";

export default function Filas() {
    const { tecnicos } = useGncData()
    const { setTela } = useFilaData()

    return (
        <div className="flex flex-col p-2 mt-3 dark:text-neutral-200 w-full">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <IconFilas sx={{ fontSize: 50 }} />
                    <span className="text-3xl font-bold ml-1">Filas</span>
                </div>
                <Botao
                    className="
                        flex flex-col items-center justify-center h-16 w-16 max-md:w-16 max-sm:w-12 max-md:h-12 max-sm:h-12
                        transition-all bg-red-500 dark:bg-red-700 text-white  rounded-lg
                        border-red-600 dark:border-red-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                    "
                    executar={() => setTela!("Excluir")}
                >
                    <IconDelFila sx={{ fontSize: 45 }} />
                </Botao>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-between">
                    <Selecione
                        texto="Técnico:"
                        nome="tecnico"
                        className="grow"
                        valor={""}
                        alterouCampo={e => console.log(e)}
                    >
                        {tecnicos!.map((registro: any) => {
                            return (
                                <option key={registro.id}>{registro.nomeCompleto}</option>
                            )
                        })}
                    </Selecione>
                    <div className="flex items-end ml-3 max-sm:mb-2">
                        <Botao
                            className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                        >Consultar</Botao>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-3 max-sm:grid max-sm:grid-cols-1">
                    <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[530px] max-2xl:h-[330px]">
                        <div className="flex justify-center font-bold text-2xl">TO DO</div>
                        <div id="hiddenScroll" className="p-2 flex flex-col overflow-auto">
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                        </div>
                    </div>
                    <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[530px] max-2xl:h-[330px]">
                        <div className="flex justify-center font-bold text-2xl">DOING</div>
                        <div id="hiddenScroll" className="p-2 flex flex-col overflow-auto">
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                        </div>
                        </div>
                    <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[530px] max-2xl:h-[330px]">
                        <div className="flex justify-center font-bold text-2xl">DOES</div>
                        <div id="hiddenScroll" className="p-2 flex flex-col overflow-auto">
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                            <CardsFilaGen />
                        </div>
                    </div>
            </div>
        </div>
    )
}