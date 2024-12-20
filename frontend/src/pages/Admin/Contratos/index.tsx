import Layout from "@/components/template/Layout"
import { IconAdmin, IconContrato } from '@/components/icons/IconesMaterial';
import { dado } from "@/data/db_teste/dado_teste";
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { AdminUrl } from "@/data/config/adminUrl";
import FormContratos from "./FormContratos";
import TabelaContratos from "./TabelaContratos";
import { useEffect, useState } from "react";
import Banco from "@/data/database/banco";
import axios from 'axios';
import { AdminGnc, initialAdminGnc } from "@/data/interfaces/AdminGnc";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { Mensagem, initialMSG } from "@/data/interfaces/Mensagem";
import { severity, variant } from "@/data/type/mensagemSistema";

export default function Contratos(){
    const [banco, setBanco] = useState<any[]>([])
    const [contrato, setContrato] = useState<AdminGnc>(initialAdminGnc)
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const baseUrl = Banco("Contrato")

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
        const Cont: any = { ...contrato }
        Cont[event.target.name] = event.target.value
        setContrato(Cont)
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
        setContrato(initialAdminGnc)
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

    function load(Contrato: AdminGnc) {
        setContrato(Contrato)
    }

    function atualizarLista(Cont: any, add = true) {
        const list = banco.filter(a => a.id !== Cont.id)
        if (add) list.push(Cont)
        return list
    }

    function salvar() {
        try{

            const Data = contrato
            const method = Data.id ? 'put' : 'post'
            const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
            axios[method](url, Data)
                        .then(resp => {
                            const banco = atualizarLista(resp.data)
                            setContrato(initialAdminGnc)
                            setBanco(banco)
                            mensagemSistema("success", "filled", "Salvo Com Sucesso !!!")
                        }).catch(erro => console.log(erro))

        }catch(e){
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    function validarCampo() {
        const { nome } = contrato

        if (nome === '') {
            mensagemSistema("error", "filled", "Faltou preencher o campo")
        } else {
            try {
                salvar()
            } catch (e) {
                mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
            }
        }

    }

    function remove(Contrato: AdminGnc){
        axios.delete(`${baseUrl}/${Contrato.id}`)
        .then(resp => {
            const list = atualizarLista(Contrato, false)
            setBanco(list)
        })
    }

    function validarRemove(Contrato: AdminGnc) {
        try{
            remove(Contrato)
            mensagemSistema("success", "filled", "Excluido com Sucesso !!!")
        }catch(e){
            mensagemSistema("error", "filled", "Falha em Excluir !!!")
        }
    }

    return(
        <Layout icone={<IconAdmin fontSize='large' />} texto="Administrador">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Contratos"
                        iconeTitulo={<IconContrato sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={AdminUrl} dataMini={AdminUrl} excecao
                    />
                </div>
            </div>
            <div className='flex flex-col items-center mt-3 mx-3  rounded-md  overflow-auto'>
                <div className="flex w-[70%] max-sm:w-[100%] justify-center">
                    <FormContratos 
                        contrato={contrato}
                        mudar={(e) => mudarCampo(e)}
                        limpar={limpar}
                        verificar={validarCampo}
                    />
                </div>
                <div className="flex w-[90%] max-sm:w-[100%] justify-center">
                    <TabelaContratos 
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