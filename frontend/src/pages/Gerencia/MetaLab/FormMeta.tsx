import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from "@/components/shared/Selecione";
import { Meta } from "@/data/interfaces/MetaGen";

interface MetaFormProps {
    meta: Meta
    alterarCampo: (novoValor: any) => void
    salvar: () => void
    limpar: () => void
}

export default function MetaForm(props: MetaFormProps) {
    return (
        <Formulario className="m-5">
            <div className="grid grid-cols-5 max-sm:grid-cols-1 max-xl:grid-cols-3 max-lg:grid-cols-2">
                <Entrada
                    tipo="number"
                    texto="OS Meta:"
                    nome="metaOS"
                    valor={props.meta?.metaOS}
                    alterouCampo={(e) => props.alterarCampo(e)}
                    requerido
                />
                <Entrada
                    tipo="number"
                    texto="Servico Meta:"
                    nome="metaServico"
                    valor={props.meta?.metaServico}
                    alterouCampo={(e) => props.alterarCampo(e)}
                    requerido
                />
                <Selecione
                    texto="Mês:"
                    nome="mes"
                    valor={props.meta?.mes}
                    alterouCampo={e => props.alterarCampo(e)}
                    requerido
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
                    nome="ano"
                    valor={props.meta?.ano}
                    alterouCampo={e => props.alterarCampo(e)}
                    requerido
                >
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                </Selecione>
                <div className="lg:hidden">

                </div>
                <div className="flex ml-2 max-lg:h-12 items-end justify-evenly mt-5 max-lg:justify-around max-lg:">
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                        executar={props.salvar}
                    >Salvar</Botao>
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                            `}
                        executar={props.limpar}
                    >Cancelar</Botao>
                </div>
            </div>
        </Formulario>
    )
}