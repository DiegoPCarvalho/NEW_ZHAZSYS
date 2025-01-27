import useGncData from "@/data/hook/useGncData"
import Botao from "../shared/Botao"
import Entrada from "../shared/Entrada"
import useFilaData from "@/data/hook/useFilaData"
import { useState } from "react"
import Carregando from "../shared/Carregando"

export default function ConsultaDados() {
    const { buscarOSFila, carregarLoadOS, dadoOSFila } = useFilaData()
    const [dadoOS, setDadoOS] = useState<string>("")

    return (
        <div className="flex flex-col">
            <div className="flex">
                <Entrada
                    mensagemCampo="Pesquise a OS..."
                    className="grow"
                    nome="OS"
                    valor={dadoOS}
                    alterouCampo={(e) => setDadoOS(e.target.value)}
                />
                <div className="flex items-end ml-2">
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}
                        executar={() => buscarOSFila!(dadoOS)}
                    >Consultar</Botao>
                </div>
            </div>
            {carregarLoadOS ? 
                <div className="mt-10">
                    <Carregando cor="success" tamanho={60}/>
                </div>
            : 
                <div className="dark:text-neutral-200 flex flex-col mt-5 w-full border-2 rounded-lg border-emerald-600 p-2">
                    <div className="flex justify-between">
                        <span className="font-bold text-xl">OS: {dadoOSFila?.OS}</span>
                        <span className="font-bold text-xl">Data: {dadoOSFila?.Data}</span>
                    </div>
                    <div>
                        <span className="font-bold text-xl">Serviço: {dadoOSFila?.Servico}</span>
                    </div>
                    <div>
                        <span className="font-bold text-xl">Tecnico: {dadoOSFila?.Tecnico}</span>
                    </div>
                </div>
            }
        </div>
    )
}