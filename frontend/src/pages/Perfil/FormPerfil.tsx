import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import useAppData from "@/data/hook/useAppData";
import { Mensagem } from "@/data/interfaces/Mensagem";
import DrawIcon from '@mui/icons-material/Draw';
import { Alert, Snackbar } from "@mui/material";

interface FormPerfilProps {
    user?: any
    open: boolean
    senha: string
    confirmarSenha: string
    setSenha: (novoValor: any) => void
    setConfirmarSenha: (novoValor: any) => void
    close: () => void
    salvar: () => void
    editar: boolean
    setEditar: () => void
    cancelar: () => void
    mensagem: Mensagem
}

export default function FormPerfil(props: FormPerfilProps) {
    const { tema } = useAppData();

    return (
        <div className="bg-white dark:bg-neutral-950 m-4 flex flex-col w-[100%] h-[90%] shadow-lg rounded-lg ">
            <div className="bg-emerald-600 dark:bg-emerald-800 h-20 rounded-t-lg flex justify-between items-center">
                <div className="ml-5 text-white text-xl font-extrabold">
                    Meus Dados
                </div>
                <div className="mr-5">
                    {!props.editar ? (
                         <Botao className={`
                         transition-all bg-yellow-500  text-white px-3 py-2 rounded-lg
                         border-yellow-600
                         border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                         active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                     `}
                     executar={props.setEditar}
                     >
                         <DrawIcon />
                     </Botao>
                    ) : false}
                </div>
            </div>
            <Formulario className="overflow-auto h-[100%] m-5 justify-around">
                <div className="flex max-lg:grid max-sm:grid-cols-1">
                    <Entrada
                        texto="Nome Completo:"
                        tipo="text"
                        className="grow"
                        valor={props.user.nomeCompleto}
                        desativar
                    />
                    <Entrada
                        texto="E-mail:"
                        tipo="text"
                        className="grow"
                        valor={props.user.email}
                        desativar
                    />
                </div>
                <div className="flex max-lg:grid max-sm:grid-cols-1 max-sm:mt-3">
                    <Entrada
                        texto="Departamento:"
                        tipo="text"
                        className="grow"
                        valor={props.user.departamento}
                        desativar
                    />
                    <Entrada
                        texto="Contrato:"
                        tipo="text"
                        className="grow"
                        valor={props.user.contrato}
                        desativar
                    />
                    <Entrada
                        texto="Especialidade:"
                        tipo="text"
                        className="grow"
                        valor={props.user.especialidade}
                        desativar
                    />
                </div>
                <div className="flex max-lg:grid max-sm:grid-cols-1 max-sm:mt-3">
                    <Entrada
                        id={tema === 'dark' ? "dataDark" : ""}
                        texto="Nova Senha:"
                        tipo="password"
                        className="grow"
                        valor={props.senha}
                        alterouCampo={e => props.setSenha(e.target.value)}
                        desativar={!props.editar}
                        />
                    <Entrada
                        id={tema === 'dark' ? "dataDark" : ""}
                        texto="Confirmar Senha:"
                        tipo="password"
                        className="grow"
                        valor={props.confirmarSenha}
                        alterouCampo={e => props.setConfirmarSenha(e.target.value)}
                        desativar={!props.editar}
                    />
                </div>
                <div className="flex justify-end mt-3 h-10">
                    {props.editar ? (
                        <>
                            <div className="mr-3">
                                <Botao
                                    className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                            `}
                                executar={props.salvar}
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
                                executar={props.cancelar}
                                >Cancelar</Botao>
                            </div>
                        </>
                    ) : false}
                </div>
            </Formulario>
            <Snackbar
                open={props.open} 
                autoHideDuration={2000}
                onClose={props.close}
            >
                <Alert
                    onClose={props.close}
                    severity={props.mensagem.severity}
                    variant={props.mensagem.variant}
                    sx={{ width: '100%' }}
                >
                  {props.mensagem.mensagem}
                </Alert>
            </Snackbar>
        </div>
    )
}