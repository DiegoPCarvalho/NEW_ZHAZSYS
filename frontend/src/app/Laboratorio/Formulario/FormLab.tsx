"use client"
import AreaTexto from "@/components/shared/AreaTexto";
import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from "@/components/shared/Selecione";
import useAppData from "@/data/hook/useAppData";
import { useState } from "react";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function FormLab() {
    const { tema } = useAppData()
    const [open, setOpen] = useState<boolean>(false)

    const close = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <Formulario>
            <div className="flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <Entrada
                    id={tema === 'dark' ? "dataDark" : ""}
                    texto="Data:"
                    tipo="datetime-local"
                    nome="Data"
                />
                <Entrada
                    texto="OS:"
                    mensagemCampo="..."
                    nome="OS"
                />
                <Entrada
                    texto="Cliente:"
                    mensagemCampo="..."
                    className="grow"
                    nome="Cliente"
                />
                <Selecione
                    texto="Serviço:"
                    nome="Servico"
                >
                    <option>aaaaaaaaaaaaaaaaaaaaa</option>
                </Selecione>
            </div>
            <div className="flex item-center mt-10 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <Selecione
                    texto="Equipamento:"
                    nome="Equipamento"
                >
                    <option>aaaaaaaaaaaaaaaaaaaaa</option>
                </Selecione>
                <Entrada
                    texto="Modelo:"
                    mensagemCampo="..."
                    nome="Modelo"
                    className="grow"
                />
                <Entrada
                    texto="NS:"
                    mensagemCampo="..."
                    nome="NS"
                    className="grow"
                />
                <Selecione
                    texto="Contrato:"
                    nome="Contrato"
                >
                    <option>aaaaaaaaaaaaaaaaaaaaa</option>
                </Selecione>
                <Selecione
                    texto="Rec. Placa:"
                    nome="Placa"
                >
                    <option>Recuperada</option>
                    <option>Não Recuperada</option>
                </Selecione>
            </div>
            <div className="grow mt-10">
                <AreaTexto
                    texto="Observação:"
                    linhas={5}
                    nome="Observacao"
                    mensagemCampo="..."
                />
            </div>
            <div className="flex justify-end mt-10">
                <div className="flex justify-between items-center w-52 h-12">
                    <Botao
                        className={`
                            cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                        executar={() => setOpen(true)}
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
             <Snackbar 
                open={open} 
                autoHideDuration={2000} 
                onClose={close}              
             >
                <Alert
                    onClose={close}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}  
                >
                   error
                </Alert>    
            </Snackbar>               
        </Formulario>
    )
}