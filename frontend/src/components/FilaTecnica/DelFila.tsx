import useGncData from "@/data/hook/useGncData";
import { IconDelFila } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import Selecione from "../shared/Selecione";

export default function DelFila(){
    const { tecnicos } = useGncData()

    return (
        <div className="flex flex-col p-2 mt-3 dark:text-neutral-200">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <IconDelFila sx={{ fontSize: 50 }} />
                    <span className="text-3xl font-bold ml-1">Delete Fila</span>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-5">
                <div className="flex justify-start">
                    <Selecione
                        texto="Técnico:"
                        nome="tecnico"
                        className=""
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
                <div className="flex justify-end items-end ml-3 max-sm:mb-2">
                        <Botao
                            className={`
                        cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                        border-red-600 dark:border-red-800
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                    `}
                        >Deletar</Botao>
                </div>
            </div>
            <div className="mt-5 bg-white dark:bg-neutral-950 shadow-lg w-full p-1 rounded-lg border-2 border-neutral-200 dark:border-neutral-600">
                    <table className="table-fixed w-full">
                        <thead className="bg-neutral-900 dark:bg-neutral-700">
                            <tr className='font-bold text-white'>
                                <th className="rounded-tl-lg rounded-tr-lg p-2">Atividades</th>
                            </tr>
                        </thead>
                        <tbody className="h-[480px] overflow-auto block">
                            
                        </tbody>
                    </table>
            </div>
        </div>
    )
}