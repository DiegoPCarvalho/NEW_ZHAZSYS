"use client"
import { IconForm, IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from "@/data/config/labUrl"
import FormLab from './FormLab';
import CentroTelaForm from './CentroTelaForm';
import useGncData from '@/data/hook/useGncData';
import { useEffect, useState } from 'react';
import { Atividade, initialAtividade } from './../../../data/interfaces/Atividade';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { initialMSG, Mensagem } from '@/data/interfaces/Mensagem';
import { severity, variant } from '@/data/type/mensagemSistema';
import { salvar } from '@/data/functions/Salvar';
import Banco from '@/data/database/banco';
import { BancoApiLocal } from '@/data/database/bancoApiLocal';
import axios from "axios";

export default function FormularioLabo() {
    const { buscarDadosLab } = useGncData()
    const [atividade, setAtividade] = useState<Atividade>(initialAtividade)
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const [baseDados, setBaseDados] = useState<any[]>([])
    const [carregando, setCarregando] = useState<boolean>(false)
    const [ultimaOS, setUltimaOS] = useState<string>("")
    const baseUrl = Banco("Geral")

    const close = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        buscarDadosLab!()
        buscarBaseDados()
    }, [])

    useEffect(() => {
        setUltimaOS(localStorage.UltimaOS)
    }, [ultimaOS])


    async function buscarBaseDados() {
        try {
            setCarregando(true)

            const tabela = await axios(BancoApiLocal("geral")).then(resp => resp.data)

            return setBaseDados(tabela)

        } catch (e) {
            console.log(e)
        } finally {
            setCarregando(false)
        }
    }

    function alterarCampo(event: any) {
        const Ativ: any = { ...atividade }
        Ativ[event.target.name] = event.target.value
        setAtividade(Ativ)
    }

    function limpar() {
        setAtividade(initialAtividade)
    }

    function mensagemSistema(tipo: severity, modelo: variant, mensagem: string) {
        setOpen(true)
        setMensagem({
            severity: tipo,
            variant: modelo,
            mensagem: mensagem
        })
    }

    function verificar() {
        try {
            const { OS, Cliente, Servico, Equipamento, Modelo, NS } = atividade

            if (OS === "" || Cliente === "" || Servico === "" || Equipamento === "" || Modelo === "" || NS === "") {
                mensagemSistema("error", "filled", "Faltou preencher o campo")
            } else {
                if (atividade.Data === "") {
                    const dt: any = new Date()

                    atividade.Data = dt
                    atividade.Dia = dt.getDate()
                    atividade.Mes = dt.getMonth() + 1
                    atividade.Ano = dt.getFullYear()
                    atividade.Tecnico = localStorage.Tecnico
                    localStorage.UltimaOS = atividade.OS
                    setUltimaOS(atividade.OS)
                    
                } else {
                    const dt: any = new Date(atividade.Data)
                    
                    atividade.Dia = dt.getDate()
                    atividade.Mes = dt.getMonth() + 1
                    atividade.Ano = dt.getFullYear()
                    atividade.Tecnico = localStorage.Tecnico
                    localStorage.UltimaOS = atividade.OS
                    setUltimaOS(atividade.OS)
                }

                salvar(atividade, baseUrl)
                limpar()
                mensagemSistema("success", "filled", "Salvo com Sucesso !!!")
            }
        } catch (e) {
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    function mostrarDado(event: any) {
        const code = event.keyCode
        const banco = baseDados

        if (code === 13 || code === 9) {
            let final = banco.filter((registro: any) => registro.OS === +atividade.OS)
            const novaAtividade: Atividade = {
                Data: '',
                Dia: '',
                Mes: '',
                Ano: '',
                OS: final[0].OS,
                Cliente: final[0].Cliente,
                Equipamento: final[0].Equipamento,
                Modelo: final[0].Modelo,
                NS: final[0].NS,
                Servico: final[0].Servico,
                Placa: '',
                Contrato: final[0].Contrato,
                Observacao: '',
                ProblemObs: '',
                Estagio: '',
                DataInicialBruto: '',
                DataFinalBruto: '',
                TempoLiquido: '',
                Tecnico: localStorage.Tecnico
            }

            setAtividade(novaAtividade)
        }
    }

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Formulário"
                        iconeTitulo={<IconForm sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                        centroTela={<CentroTelaForm os={ultimaOS} buscar={buscarBaseDados} loading={carregando} />}
                    />
                </div>
                <div className='mt-5 mx-3 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:shadow-md rounded-md shadow-lg overflow-auto'>
                    <FormLab
                        Atividade={atividade}
                        mudarCampo={alterarCampo}
                        limpar={limpar}
                        open={open}
                        close={close}
                        mensagem={mensagem}
                        salvar={verificar}
                        buscarPesquisa={mostrarDado}
                    />
                </div>
            </div>
        </Layout>
    )
}