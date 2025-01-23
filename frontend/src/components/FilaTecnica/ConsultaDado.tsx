import useGncData from "@/data/hook/useGncData"
import Selecione from "../shared/Selecione"
import Botao from "../shared/Botao"
import Entrada from "../shared/Entrada"

export default function ConsultaDados() {
    const { tecnicos } = useGncData()

    return (
        <div className="flex flex-col">
            <div className="flex">
                <Entrada
                    mensagemCampo="Pesquise a OS..."
                    className="grow"
                    nome="OS"
                    valor={""}
                    alterouCampo={(e) => console.log(e)}
                />
                <div className="flex items-end ml-2">
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
            <div className="dark:text-neutral-200 flex flex-col mt-5 w-full border-2 rounded-lg border-emerald-600 p-2">
                <div className="flex justify-between">
                    <span className="font-bold text-xl">OS: 12345</span>
                    <span className="font-bold text-xl">Data: 17/05/2025</span>
                </div>
                <div>
                    <span className="font-bold text-xl">Serviço: Laudo</span>
                </div>
                <div>
                    <span className="font-bold text-xl">Tecnico: Diego Carvalho</span>
                </div>
            </div>
        </div>
    )
}