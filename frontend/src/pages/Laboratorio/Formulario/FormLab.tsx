"use client"
import AreaTexto from "@/components/shared/AreaTexto";
import Botao from "@/components/shared/Botao";
import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import Selecione from "@/components/shared/Selecione";
import useAppData from "@/data/hook/useAppData";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import useGncData from '@/data/hook/useGncData';
import { Atividade } from "@/data/interfaces/Atividade";
import { Mensagem } from "@/data/interfaces/Mensagem";


interface FormLabProps {
    Atividade: Atividade
    mensagem?: Mensagem
    open?: boolean
    mudarCampo: (novoValor: any) => void
    buscarPesquisa?: (novoValor: any) => void
    limpar: () => void
    close?: () => void
    salvar: () => void
    
}   

export default function FormLab(props: FormLabProps) {
    const { tema } = useAppData()
    const { servicoLab, equipamentos,  contratos} = useGncData()
    
    return (
        <Formulario className="m-5">
            <div className="flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <Entrada
                    id={tema === 'dark' ? "dataDark" : ""}
                    texto="Data:"
                    tipo="datetime-local"
                    nome="Data"
                    valor={props.Atividade?.Data}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    />
                <Entrada
                    texto="OS:"
                    mensagemCampo="..."
                    nome="OS"
                    valor={props.Atividade?.OS}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    buscarPesquisa={(e) => props.buscarPesquisa!(e)}
                    requerido
                />
                <Entrada
                    texto="Cliente:"
                    mensagemCampo="..."
                    className="grow"
                    nome="Cliente"
                    valor={props.Atividade?.Cliente}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    requerido
                />
            </div>
            <div className="flex item-center mt-5 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-2">
                <Selecione
                    texto="Serviço:"
                    nome="Servico"
                    className="grow"
                    valor={props.Atividade?.Servico}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    requerido
                >
                    {servicoLab!.map((registro: any) => {
                        return <option key={registro.id}>{registro.nome}</option>
                    })}
                </Selecione>
                {props.Atividade?.Servico === "Recuperação de Placa" ? 
                    <Selecione
                    texto="Rec. Placa:"
                    nome="Placa"
                    className="grow"
                    valor={props.Atividade?.Placa}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    >
                        <option>Recuperada</option>
                        <option>Não Recuperada</option>
                    </Selecione>
                : false}
                <Selecione
                    texto="Contrato:"
                    nome="Contrato"
                    className="grow"
                    valor={props.Atividade?.Contrato}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    requerido
                    >
                    <option>Avulso</option>
                    {contratos!.map((registro: any) => {
                        return <option key={registro.id}>{registro.nome}</option>
                    })}
                </Selecione>
            </div>
            <div className="flex item-center mt-5 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-2">
            <Selecione
                    texto="Equipamento:"
                    nome="Equipamento"
                    className="grow"
                    valor={props.Atividade?.Equipamento}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    requerido
                    >
                    {equipamentos!.map((registro: any) => {
                        return <option key={registro.id}>{registro.nome}</option>
                    })}
                </Selecione>
                <Entrada
                    texto="Modelo:"
                    mensagemCampo="..."
                    nome="Modelo"
                    className="grow"
                    valor={props.Atividade?.Modelo}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    requerido
                />
                <Entrada
                    texto="NS:"
                    mensagemCampo="..."
                    nome="NS"
                    className="grow"
                    valor={props.Atividade?.NS}
                    alterouCampo={(e) => props.mudarCampo(e)}
                    requerido
                />
            </div>            
            <div className="grow mt-5 max-sm:mt-2">
                <AreaTexto
                    texto="Observação:"
                    linhas={5}
                    nome="Observacao"
                    mensagemCampo="..."
                    valor={props.Atividade?.Observacao}
                    alterouCampo={(e) => props.mudarCampo(e)}
                />
            </div>
            <div className="flex justify-end mt-5">
                <div className="flex justify-between items-center w-60 h-12">
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
             <Snackbar 
                open={props.open} 
                autoHideDuration={2000} 
                onClose={props.close}              
             >
                <Alert
                    onClose={props.close}
                    severity={props.mensagem?.severity}
                    variant={props.mensagem?.variant}
                    sx={{ width: '100%' }}  
                >
                   {props.mensagem?.mensagem}
                </Alert>    
            </Snackbar>               
        </Formulario>
    )
}