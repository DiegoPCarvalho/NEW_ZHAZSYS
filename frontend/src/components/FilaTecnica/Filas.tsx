import useGncData from "@/data/hook/useGncData";
import { IconDelFila, IconFilas } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import Selecione from "../shared/Selecione";
import CardsFilaGen from "../Cards/CardFilaGen";
import useFilaData from "@/data/hook/useFilaData";
import { useState } from "react";
import Carregando from "../shared/Carregando";
import { dataNova } from "@/data/functions/DataNova";

export default function Filas() {
    const { tecnicos } = useGncData()
    const { setTela, buscarFilaGen, carregarFilaUser, filaEnviadaGen, filaIniciadaGen, filaFinalizadaGen } = useFilaData()
    const [tecnico, setTecnico] = useState<string>("")

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
                        valor={tecnico}
                        alterouCampo={e => setTecnico(e.target.value)}
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
                            executar={() => buscarFilaGen!(tecnico)}
                        >Consultar</Botao>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-3 max-sm:grid max-sm:grid-cols-1">
                {carregarFilaUser ?
                    <div className="flex justify-center items-center w-full"> 
                        <Carregando cor="success" tamanho={300} grafico/>
                    </div>
                    : <>
                        <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[530px] max-2xl:h-[330px]">
                            <div className="flex justify-center font-bold text-2xl">TO DO</div>
                            <div id="hiddenScroll" className="p-2 flex flex-wrap overflow-auto">
                                {filaEnviadaGen!.map((registro: any) => {
                                    return (
                                        <CardsFilaGen
                                            key={registro.id}
                                            OS={registro.OS}
                                            Servico={registro.Servico}
                                            Contrato={registro.TipoOS}
                                            Estagio={registro.Estagio}
                                            Problema={registro.Problema ? registro.Problema : "NÃO"}
                                            dado={registro}
                                            Importante={registro.Importante}
                                            id={registro.id === undefined ? 0 : false}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[530px] max-2xl:h-[330px]">
                            <div className="flex justify-center font-bold text-2xl">DOING</div>
                            <div id="hiddenScroll" className="p-2 flex flex-wrap overflow-auto">
                                {filaIniciadaGen!.map((registro: any) => {
                                    return (
                                        <CardsFilaGen
                                            key={registro.id}
                                            OS={registro.OS}
                                            Servico={registro.Servico}
                                            Contrato={registro.TipoOS}
                                            Estagio={registro.Estagio}
                                            Problema={registro.Problema ? registro.Problema : "NÃO"}
                                            dado={registro}
                                            Importante={registro.Importante}
                                            id={registro.id === undefined ? 0 : false}
                                        />
                                    )
                                })}
                            </div>
                            </div>
                        <div className="flex flex-col w-[33%] max-sm:w-full max-sm:mb-2 h-[530px] max-2xl:h-[330px]">
                            <div className="flex justify-center font-bold text-2xl">DOES</div>
                            <div id="hiddenScroll" className="p-2 flex flex-wrap overflow-auto">
                                {filaFinalizadaGen!.map((registro: any) => {
                                    return (
                                        <CardsFilaGen
                                            key={registro.id}
                                            OS={registro.OS}
                                            Data={registro.Data === undefined ? "" : dataNova(registro.Data)}
                                            Servico={registro.Servico}
                                            Contrato={registro.Contrato}
                                            Estagio={registro.Estagio}
                                            Problema={registro.Problema ? registro.Problema : "NÃO"}
                                            Importante={registro.Importante}
                                            dado={registro}
                                        />
                                    )
                                })}
                            </div>
                        </div> 
                    </>}
            </div>
        </div>
    )
}