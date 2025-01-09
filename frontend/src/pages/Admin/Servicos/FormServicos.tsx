import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from "@/components/shared/Selecione";
import { Servico } from "@/data/interfaces/Servico";

interface FormServicosProps {
    servico?: Servico
    mudar: (novoValor: any) => void
    verificar: () => void
    limpar: () => void
}

export default function FormServicos(props: FormServicosProps) {

    return (
        <div className="bg-white w-[100%] max-sm:w-[95%] mt-10 dark:bg-neutral-950 dark:text-white border shadow-lg dark:border-2 dark:border-neutral-600  rounded-lg">
            <Formulario className="m-5">
                <div className="flex max-sm:flex-col items-center w-[100%]">
                    <Entrada
                        tipo="text"
                        nome="nome"
                        texto="Serviço:"
                        className="grow mx-2 max-sm:mx-0"
                        valor={props.servico?.nome}
                        alterouCampo={(e) => props.mudar(e)}
                        requerido
                    />
                    <Selecione
                        texto="Tipo:"
                        nome="tipo"
                        className="grow max-sm:mx-0 max-sm:w-[80%]"
                        valor={props.servico?.tipo}
                        alterouCampo={(e) => props.mudar(e)}
                        requerido
                    >
                        <option>Laboratório</option>
                        <option>VHL</option>
                    </Selecione>
                    <div className="flex justify-between items-end w-60 h-12 mt-5 ml-2">
                        <Botao
                            className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                            executar={props.verificar}
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
        </div>

    )
}