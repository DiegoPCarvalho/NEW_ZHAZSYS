import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from './../../../components/shared/Selecione';
import Botao from "@/components/shared/Botao";
import { Alert, Snackbar } from "@mui/material";

export default function FormUsers() {
    return (
        <div className="bg-white w-[100%] mt-10 dark:bg-neutral-950 dark:text-white border shadow-lg dark:border-2 dark:border-neutral-600  rounded-lg">
            <Formulario>
                <div className="flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <Entrada
                        tipo="text"
                        nome="NomeCompleto"
                        texto="Nome Completo:"
                        className="grow"
                        mensagemCampo="..."
                    />
                    <Entrada
                        tipo="text"
                        nome="Email"
                        texto="E-mail:"
                        className="grow"
                        mensagemCampo="..."
                    />
                    <Entrada
                        tipo="password"
                        nome="Senha"
                        texto="Senha:"
                        className="grow"
                        mensagemCampo="..."
                    />
                    <Entrada
                        tipo="password"
                        nome="ConfirmarSenha"
                        texto="Confirmar Senha:"
                        className="grow"
                        mensagemCampo="..."
                    />

                </div>
                <div className="lg:mt-3 flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <Selecione
                        texto="Departamento:"
                        nome="Departamento"
                        className="grow"
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                    <Selecione
                        texto="Contrato:"
                        nome="Contrato"
                        className="grow"
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                    <Selecione
                        texto="Especialidade:"
                        nome="Especialidade"
                        className="grow"
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
                    <Selecione
                        texto="Acesso:"
                        nome="Acesso"
                        className="grow"
                    >
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                    </Selecione>
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

                        executar={() => console.log("")}
                    >Salvar</Botao>
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                            `}
                    >Cancelar</Botao>
                </div>
            </div>
            </Formulario>
            <Snackbar 
                // open={open} 
                // autoHideDuration={2000} 
                // onClose={close}              
             >
                <Alert
                    // onClose={close}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}  
                >
                   error
                </Alert>    
            </Snackbar>  
        </div>
    )
}