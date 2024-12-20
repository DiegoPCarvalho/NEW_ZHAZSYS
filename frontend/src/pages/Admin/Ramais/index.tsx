import Layout from "@/components/template/Layout"
import { IconAdmin, IconRamal } from '@/components/icons/IconesMaterial';
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { dado } from "@/data/db_teste/dado_teste";
import TabelaRamais from "./TabelaRamais";
import { AdminUrl } from "@/data/config/adminUrl";
import FormRamais from "./FormRamais";
import { useEffect, useState } from "react";
import Banco from "@/data/database/banco";
import axios from 'axios';
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { Mensagem, initialMSG } from "@/data/interfaces/Mensagem";
import { severity, variant } from "@/data/type/mensagemSistema";
import { Ramal, initialRamal } from "@/data/interfaces/Ramal";

export default function Ramais() {
    const [banco, setBanco] = useState<any[]>([])
    const [ramal, setRamal] = useState<Ramal>(initialRamal)
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const baseUrl = Banco("Ramal")

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
        const rm: any = { ...ramal }
        rm[event.target.name] = event.target.value
        setRamal(rm)
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
        setRamal(initialRamal)
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

    function load(Ramal: Ramal) {
        setRamal(Ramal)
    }

    function atualizarLista(rm: any, add = true) {
        const list = banco.filter(a => a.id !== rm.id)
        if (add) list.push(rm)
        return list
    }

    function salvar() {
        try {
            const Data = ramal
            const method = Data.id ? 'put' : 'post'
            const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
            axios[method](url, Data)
                .then(resp => {
                    const banco = atualizarLista(resp.data)
                    setRamal(initialRamal)
                    setBanco(banco)
                    mensagemSistema("success", "filled", "Salvo Com Sucesso !!!")
                }).catch(erro => console.log(erro))

        } catch (e) {
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    function validarCampo() {
        const { Departamento, Usuario, Ramal } = ramal

        if (Departamento === '' || Usuario === '' || Ramal === 0) {
            mensagemSistema("error", "filled", "Faltou preencher o campo")
        } else {
            try {
                salvar()
            } catch (e) {
                mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
            }
        }

    }

    function remove(Ramal: Ramal) {
        axios.delete(`${baseUrl}/${Ramal.id}`)
            .then(resp => {
                const list = atualizarLista(Ramal, false)
                setBanco(list)
            })
    }

    function validarRemove(Ramal: Ramal) {
        try {
            remove(Ramal)
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
                        titulo="Ramais"
                        iconeTitulo={<IconRamal sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={AdminUrl} dataMini={AdminUrl} excecao
                    />
                </div>
            </div>
            <div className='flex flex-col items-center mt-3 mx-3  rounded-md  overflow-auto'>
                <div className="flex w-[70%] max-sm:w-[100%] justify-center">
                    <FormRamais 
                        ramal={ramal}
                        mudar={(e) => mudarCampo(e)}
                        limpar={limpar}
                        verificar={validarCampo}
                    />
                </div>
                <div className="flex w-[90%] max-sm:w-[100%] justify-center">
                    <TabelaRamais 
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