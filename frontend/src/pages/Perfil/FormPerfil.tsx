import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import useAppData from "@/data/hook/useAppData";
import DrawIcon from '@mui/icons-material/Draw';
import { Alert, Snackbar } from "@mui/material";
import { useState } from 'react';

export default function FormPerfil() {
    const { tema } = useAppData();
    const [editar, setEditar] = useState<boolean>(false);

    return (
        <div className="bg-white dark:bg-neutral-950 m-4 flex flex-col w-[100%] h-[90%] shadow-lg rounded-lg ">
            <div className="bg-emerald-600 dark:bg-emerald-800 h-20 rounded-t-lg flex justify-between items-center">
                <div className="ml-5 text-white text-xl font-extrabold">
                    Meus Dados
                </div>
                <div className="mr-5">
                    {!editar ? (
                         <Botao className={`
                         transition-all bg-yellow-500  text-white px-3 py-2 rounded-lg
                         border-yellow-600
                         border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                         active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                     `}
                     executar={() => setEditar(true)}
                     >
                         <DrawIcon />
                     </Botao>
                    ) : false}
                </div>
            </div>
            <Formulario className="overflow-auto h-[100%] justify-around">
                <div className="flex max-lg:grid max-sm:grid-cols-1">
                    <Entrada
                        texto="Nome Completo:"
                        tipo="text"
                        nome="NomeCompleto"
                        className="grow"
                        valor={"Diego Carvalho"}
                        desativar
                    />
                    <Entrada
                        texto="E-mail:"
                        tipo="text"
                        nome="Email"
                        className="grow"
                        desativar
                    />
                </div>
                <div className="flex max-lg:grid max-sm:grid-cols-1 max-sm:mt-3">
                    <Entrada
                        texto="Departamento:"
                        tipo="text"
                        nome="Departamento"
                        className="grow"
                        desativar
                    />
                    <Entrada
                        texto="Contrato:"
                        tipo="text"
                        nome="Contrato"
                        className="grow"
                        desativar
                    />
                    <Entrada
                        texto="Especialidade:"
                        tipo="text"
                        nome="Especialidade"
                        className="grow"
                        desativar
                    />
                </div>
                <div className="flex max-lg:grid max-sm:grid-cols-1 max-sm:mt-3">
                    <Entrada
                        id={tema === 'dark' ? "dataDark" : ""}
                        texto="Nova Senha:"
                        tipo="password"
                        nome="Senha"
                        className="grow"
                        desativar={!editar}
                    />
                    <Entrada
                        id={tema === 'dark' ? "dataDark" : ""}
                        texto="Confirmar Senha:"
                        tipo="password"
                        nome="ConfirmarSenha"
                        className="grow"
                        desativar={!editar}
                    />
                </div>
                <div className="flex justify-end mt-3 h-10">
                    {editar ? (
                        <>
                            <div className="mr-3">
                                <Botao
                                    className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}

                                >Salvar</Botao>
                            </div>
                            <div>
                                <Botao
                                    className={`
                            cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                            border-red-600 dark:border-red-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                            `}
                                executar={() => setEditar(false)}
                                >Cancelar</Botao>
                            </div>
                        </>
                    ) : false}
                </div>
            </Formulario>
            <Snackbar
                // open={open} 
                autoHideDuration={2000}
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