import useGncData from "@/data/hook/useGncData";
import { IconAddFila, IconRefresh } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import Selecione from "../shared/Selecione";

export default function AddFila() {
    const { contratos } = useGncData()

    return (
        <div className="flex flex-col p-2 mt-5 dark:text-neutral-200">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <IconAddFila sx={{ fontSize: 50 }} />
                    <span className="text-3xl font-bold">Add Fila</span>
                </div>
                <Botao
                    className="
                        flex flex-col items-center justify-center h-16 w-16 max-md:w-16 max-sm:w-12 max-md:h-12 max-sm:h-12
                        transition-all bg-green-500 dark:bg-green-700 text-white  rounded-lg
                        border-green-600 dark:border-green-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                    "

                >
                    <IconRefresh sx={{ fontSize: 45 }} />
                </Botao>
            </div>
            <div className="flex justify-center mt-2 max-sm:grid max-sm:grid-cols-1">
                <div className="grid grid-cols-2 max-sm:grid-cols-1">
                    <Selecione
                        texto="Estágio:"
                        nome="estagio"
                        className="grow"
                        valor={""}
                        alterouCampo={(e) => console.log(e)}
                    >
                        <option>Laudo</option>
                        <option>Manutenção</option>
                    </ Selecione>
                    <Selecione
                        texto="Tipo:"
                        nome="tipo"
                        className="grow"
                        valor={""}
                        alterouCampo={(e) => console.log(e)}

                    >
                        {contratos!.map((registro: any) => {
                            return (
                                <option key={registro.id}>{registro.nome}</option>
                            )
                        })}
                    </ Selecione>
                </div>
                <div className="flex items-end ml-5 max-sm:mt-3 max-sm:justify-end max-sm:h-10">
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}                        
                    >Buscar</Botao>
                </div>
            </div>
            <div className="">
                tabela
            </div>
        </div>
    )
}