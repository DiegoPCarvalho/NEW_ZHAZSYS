import { IconMeta, IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { GenUrl } from '@/data/config/GenUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import useAppData from "@/data/hook/useAppData";
import {useEffect, useState} from 'react'
import MetaForm from './FormMeta';
import { Meta, initialMeta } from '@/data/interfaces/MetaGen';
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';
import { Mensagem, initialMSG } from '@/data/interfaces/Mensagem';
import TabelaMeta from './TabelaMeta';
import Banco from '@/data/database/banco';
import { severity, variant } from '@/data/type/mensagemSistema';
import axios from 'axios';

export default function MetaLab(){
    const { adminL2 } = useAppData()
    const [banco, setBanco] = useState<any[]>([])
    const [meta, setMeta] = useState<Meta>(initialMeta)
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const baseUrl = Banco("Meta")

    async function BuscarDado() {
        try {
            const dado = await axios(baseUrl).then(resp => resp.data)
            setBanco(dado)
        } catch (e) {
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    useEffect(() => {
        BuscarDado()
        adminL2!()
    }, [])

    function alterarCampo(event: any){
        const Meta: any = { ...meta }
        Meta[event.target.name] = event.target.value
        setMeta(Meta)
    }

    function limpar(){
        setMeta(initialMeta)
    }

    function verificar(){

        const { metaOS, metaServico, mes, ano} = meta

        if (metaOS === 0 || metaServico === 0 || mes === "" || ano === "") {
            mensagemSistema("error", "filled", "Faltou preencher o campo")
        } else {
            try {
                salvar()
            } catch (e) {
                mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
            }
        }
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

    function mensagemSistema(tipo: severity, modelo: variant, mensagem: string) {
        setOpen(true)
        setMensagem({
            severity: tipo,
            variant: modelo,
            mensagem: mensagem
        })
    }

    function atualizarLista(Equip: any, add = true) {
        const list = banco.filter(a => a.id !== Equip.id)
        if (add) list.push(Equip)
        return list
    }

    function salvar() {
        try{

            const Data = meta
            const method = Data.id ? 'put' : 'post'
            const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
            axios[method](url, Data)
                        .then(resp => {
                            const banco = atualizarLista(resp.data)
                            setMeta(initialMeta)
                            setBanco(banco)
                            mensagemSistema("success", "filled", "Salvo Com Sucesso !!!")
                        }).catch(erro => console.log(erro))

        }catch(e){
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    function remove(meta: Meta){
        axios.delete(`${baseUrl}/${meta.id}`)
        .then(resp => {
            const list = atualizarLista(meta, false)
            setBanco(list)
        })
    }

    function validarRemove(meta: Meta) {
        try{
            remove(meta)
            mensagemSistema("success", "filled", "Excluido com Sucesso !!!")
        }catch(e){
            mensagemSistema("error", "filled", "Falha em Excluir !!!")
        }
    }

    function load(meta: Meta) {
        setMeta(meta)
    }
    
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Meta Lab."
                        iconeTitulo={<IconMeta sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={GenUrl} dataMini={GenUrl}
                    />
                </div>
                <div className='bg-white shadow-lg dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-600 m-5 rounded-lg'>
                    <MetaForm meta={meta} alterarCampo={alterarCampo} salvar={verificar} limpar={limpar}/>
                </div>
                <div className='flex mx-5 max-sm:w-[100%] justify-center'>
                    <TabelaMeta 
                        load={load}
                        remove={validarRemove}
                        dados={banco}
                    />             
                </div>
                <div>
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
            </div>
        </Layout>
    )
}