import Layout from "@/components/template/Layout"
import { IconAdmin, IconServico } from '@/components/icons/IconesMaterial';
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { AdminUrl } from "@/data/config/adminUrl";
import FormServicos from "./FormServicos";
import TabelaServicos from "./TabelaServicos";
import { useEffect, useState } from "react";
import Banco from "@/data/database/banco";
import axios from 'axios';
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { Mensagem, initialMSG } from "@/data/interfaces/Mensagem";
import { severity, variant } from "@/data/type/mensagemSistema";
import { Servico, initialServico } from "@/data/interfaces/Servico";

export default function Servicos() {
    const [banco, setBanco] = useState<any[]>([])
    const [servico, setServico] = useState<Servico>(initialServico)
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const baseUrl = Banco("Servico")

    async function BuscarDado() {
        try {
            const dado = await axios(baseUrl).then(resp => resp.data)
            setBanco(dado)
        } catch (e) {

        }
    }

    useEffect(() => {
        BuscarDado()
    }, [])

    function mudarCampo(event: any) {
        const Serv: any = { ...servico }
        Serv[event.target.name] = event.target.value
        setServico(Serv)
    }

    function mensagemSistema(tipo: severity, modelo: variant, mensagem: string) {
        setOpen(true)
        setMensagem({
            severity: tipo,
            variant: modelo,
            mensagem: mensagem
        })
    }

    function limpar() {
        setServico(initialServico)
    }

    const close = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function load(Servico: Servico) {
        setServico(Servico)
    }

    function atualizarLista(Serv: any, add = true) {
        const list = banco.filter(a => a.id !== Serv.id)
        if (add) list.push(Serv)
        return list
    }

    function salvar() {
        try {
            const Data = servico
            const method = Data.id ? 'put' : 'post'
            const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
            axios[method](url, Data)
                .then(resp => {
                    const banco = atualizarLista(resp.data)
                    setServico(initialServico)
                    setBanco(banco)
                    mensagemSistema("success", "filled", "Salvo Com Sucesso !!!")
                }).catch(erro => console.log(erro))

        } catch (e) {
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    function validarCampo() {
        const { nome, tipo } = servico

        if (nome === '' || tipo === '') {
            mensagemSistema("error", "filled", "Faltou preencher o campo")
        } else {
            try {
                salvar()
            } catch (e) {
                mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
            }
        }

    }

    function remove(Servico: Servico) {
        axios.delete(`${baseUrl}/${Servico.id}`)
            .then(resp => {
                const list = atualizarLista(Servico, false)
                setBanco(list)
            })
    }

    function validarRemove(Servico: Servico) {
        try {
            remove(Servico)
            mensagemSistema("success", "filled", "Excluido com Sucesso !!!")
        } catch (e) {
            mensagemSistema("error", "filled", "Falha em Excluir !!!")
        }
    }

    return (
        <Layout icone={<IconAdmin fontSize='large' />} texto="Administrador">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Serviços"
                        iconeTitulo={<IconServico sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={AdminUrl} dataMini={AdminUrl} excecao
                    />
                </div>
            </div>
            <div className='flex flex-col items-center mt-3 mx-3  rounded-md  overflow-auto'>
                <div className="flex w-[70%] max-sm:w-[100%] justify-center">
                    <FormServicos
                        servico={servico}
                        mudar={(e) => mudarCampo(e)}
                        limpar={limpar}
                        verificar={validarCampo}
                    />
                </div>
                <div className="flex w-[90%] max-sm:w-[100%] justify-center">
                    <TabelaServicos
                        dados={banco}
                        load={load}
                        remove={validarRemove}
                    />
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={close}
                >
                    <Alert
                        onClose={close}
                        severity={mensagem.severity}
                        variant={mensagem.variant}
                        sx={{ width: '100%' }}
                    >
                        {mensagem.mensagem}
                    </Alert>
                </Snackbar>
            </div>
        </Layout>
    )
}