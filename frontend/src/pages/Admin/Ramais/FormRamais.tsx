import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from "@/components/shared/Selecione";
import { Ramal } from "@/data/interfaces/Ramal";

interface FormRamaisProps {
    ramal: Ramal
    mudar: (novoValor: any) => void
    verificar: () => void
    limpar: () => void
}

export default function FormRamais(props: FormRamaisProps) {
    return (
        <div className="bg-white max-sm:w-[95%] mt-10 dark:bg-neutral-950 dark:text-white border shadow-lg dark:border-2 dark:border-neutral-600  rounded-lg">
            <Formulario className="m-5">
                <div className="flex max-sm:flex-col items-center w-[100%]">
                    <Selecione
                        texto="Departamento:"
                        nome="departamento"
                        className="grow"
                        valor={props.ramal.departamento}
                        alterouCampo={(e) => props.mudar(e)}
                        requerido
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                    <Entrada
                        tipo="text"
                        nome="usuario"
                        texto="Usuário:"
                        className="grow mx-2 max-sm:mx-0"
                        mensagemCampo="..."
                        valor={props.ramal.usuario}
                        alterouCampo={(e) => props.mudar(e)}
                        requerido
                    />
                    <Entrada
                        tipo="number"
                        nome="numero"
                        texto="Ramal:"
                        className="grow mx-2 max-sm:mx-0"
                        mensagemCampo="..."
                        valor={props.ramal.numero}
                        alterouCampo={(e) => props.mudar(e)}
                        requerido
                    />
                    <div className="flex justify-between items-end w-60 h-12 mt-5">
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