import CardsFila from "@/components/Cards/CardsFila";
import Carregando from "@/components/shared/Carregando";
import useFilaData from "@/data/hook/useFilaData";
import { dataNova } from './../../../data/functions/DataNova';

export default function FilaUser() {

    const { carregarFilaUser , filaEnviada, filaIniciada, filaFinalizada } = useFilaData()

    return (
        <div className="flex dark:text-neutral-200 justify-between w-full  mt-10 max-sm:grid max-sm:grid-cols-1">
            {carregarFilaUser ?
                <div className="flex justify-center items-center w-full h-[650px] max-2xl:h-[370px]">
                    <Carregando cor="success" tamanho={300} grafico />
                </div>
                : <>
                    <div className="flex flex-col w-[30%] max-sm:w-full max-sm:mb-2 h-[680px] max-2xl:h-[465px]">
                        <div className="flex justify-center font-bold text-2xl">TO DO</div>
                        <div id="hiddenScroll" className="p-2 flex flex-wrap overflow-auto">
                            {filaEnviada!.map((registro: any, i:number) => {
                                return (
                                    <CardsFila 
                                        key={registro.id ? i : registro.id}
                                        OS={registro.OS}
                                        Data={registro.Data === undefined ? "" : dataNova(registro.Data)}
                                        Servico={registro.Servico}
                                        Contrato={registro.TipoOS}
                                        Estagio={registro.Estagio}
                                        dado={registro}
                                        Importante={registro.Importante}
                                        id={registro.id === undefined ? 0 : false}
                                        />
                                    )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col w-[30%] max-sm:w-full max-sm:mb-2 h-[680px] max-2xl:h-[330px]">
                        <div className="flex justify-center font-bold text-2xl">DOING</div>
                        <div id="hiddenScroll" className="p-2 flex flex-wrap overflow-auto">
                            {filaIniciada!.map((registro: any) => {
                                return (
                                    <CardsFila 
                                        key={registro.id}
                                        OS={registro.OS}
                                        Data={registro.Data === undefined ? "" : dataNova(registro.Data)}
                                        Servico={registro.Servico}
                                        Contrato={registro.TipoOS}
                                        Estagio={registro.Estagio}
                                        dado={registro}
                                        Importante={registro.Importante}
                                        id={registro.id === undefined ? 0 : false}
                                    />
                                )
                            })}

                        </div>
                    </div>
                    <div className="flex flex-col w-[30%] max-sm:w-full max-sm:mb-2 h-[680px] max-2xl:h-[330px]">
                        <div className="flex justify-center font-bold text-2xl">DOES</div>
                        <div id="hiddenScroll" className="p-2 flex flex-wrap overflow-auto">
                            {/* {filaFinalizada!.map((registro: any) => {
                                return (
                                    <CardsFila 
                                        key={registro.id}
                                        OS={registro.OS}
                                        Data={registro.Data === undefined ? "" : dataNova(registro.Data)}
                                        Servico={registro.Servico}
                                        Contrato={registro.Contrato}
                                        Estagio={registro.Estagio}
                                    />
                                )
                            })} */}
                        </div>
                    </div>
                </>}
        </div>
    )
}   