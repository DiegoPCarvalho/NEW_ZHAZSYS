import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from './../../../components/shared/Selecione';
import Botao from "@/components/shared/Botao";

import { Usuario } from "@/data/interfaces/Usuario";

interface FormUsersProps {
    usuario: Usuario
    senha: string
    mudar: (novoValor: any) => void
    setSenha: (novoValor: any) => void
    limpar: () => void
    verificar: () => void
}

export default function FormUsers(props: FormUsersProps) {
    
    return (
        <div className="bg-white w-[100%] mt-2 dark:bg-neutral-950 dark:text-white border shadow-lg dark:border-2 dark:border-neutral-600  rounded-lg">
            <Formulario className="m-5">
                <div className="flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <Entrada
                        tipo="text"
                        nome="nomeCompleto"
                        valor={props.usuario?.nomeCompleto}
                        alterouCampo={(e) => props.mudar(e)}
                        texto="Nome Completo:"
                        className="grow"
                        mensagemCampo="..."
                        requerido
                    />
                    <Entrada
                        tipo="text"
                        nome="email"
                        valor={props.usuario?.email}
                        alterouCampo={(e) => props.mudar(e)}
                        texto="E-mail:"
                        className="grow"
                        mensagemCampo="..."
                        requerido
                    />
                    <Selecione
                        texto="Departamento:"
                        nome="departamento"
                        valor={props.usuario?.departamento}
                        alterouCampo={(e) => props.mudar(e)}
                        className="grow"
                        requerido
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                </div>
                <div className="lg:mt-3 flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <Entrada
                        tipo="text"
                        // nome="Senha"
                        valor={props.senha}
                        alterouCampo={(e) => props.setSenha(e.target.value)}
                        texto="Senha:"
                        className="grow"
                        mensagemCampo="..."
                        requerido
                    />
                    <Selecione
                        texto="Acesso:"
                        nome="acesso"
                        valor={props.usuario?.acesso}
                        alterouCampo={(e) => props.mudar(e)}
                        className="grow"
                        requerido
                    >
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                    </Selecione>
                    <Selecione
                        texto="Contrato:"
                        nome="contrato"
                        valor={props.usuario?.contrato}
                        alterouCampo={(e) => props.mudar(e)}
                        className="grow"
                        requerido
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                </div>
                <div className="lg:mt-3 flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <Selecione
                        texto="Especialidade:"
                        nome="especialidade"
                        valor={props.usuario?.especialidade}
                        alterouCampo={(e) => props.mudar(e)}
                        className="grow"
                        requerido
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                    <Entrada
                        tipo="text"
                        nome="fotoUrl"
                        valor={props.usuario?.fotoUrl}
                        alterouCampo={(e) => props.mudar(e)}
                        texto="Foto Url:"
                        className="grow"
                        mensagemCampo="..."
                    />
                </div>
                <div className="flex justify-end mt-10">
                    <div className="flex justify-between items-center w-60 h-12">
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