"use client"
import { IconQrcode, IconTabela } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from '@/data/config/labUrl';
import TabelaLab from './TabelaLab';
import { Alert, Snackbar } from "@mui/material";
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import {useState, useEffect} from 'react'
import Banco from '@/data/database/banco';
import { Mensagem, initialMSG } from '@/data/interfaces/Mensagem';
import { Atividade, initialAtividade } from '@/data/interfaces/Atividade';
import useGncData from '@/data/hook/useGncData';
import axios from "axios"
import useLocalStorage from '@/data/hook/useLocalStorage';
import { severity, variant } from '@/data/type/mensagemSistema';
import Carregando from '@/components/shared/Carregando';

export default function TabelaLabo() {
    const { buscarDadosLab } = useGncData()
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const [open, setOpen] = useState<boolean>(false)
    const [openM, setOpenM] = useState<boolean>(false)
    const [banco, setBanco] = useState<any[]>([])
    const [atividade, setAtividade] = useState<Atividade>(initialAtividade)
    const [excluir, setExcluir] = useState<boolean>(false)
    const [carregando, setCarregando] = useState<boolean>(false)
    const baseUrl = Banco("Geral")
    const { set } = useLocalStorage()

    useEffect(() =>{
        buscarDadosLab!()
        buscarTabela()
    },[])

    const close = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen!(false);
    };

    async function buscarTabela(){
        try{
            setCarregando(true)
            const tabela = await axios(baseUrl).then(resp => {
                let dado = resp.data
                let data = new Date()
    
                let tecnico = dado.filter((registro: any) => (registro.Tecnico === localStorage.Tecnico && registro.Ano === data.getFullYear() && registro.Mes === data.getMonth() + 1))
    
                return tecnico
            })
    
            return setBanco(tabela)

        }catch(e){
            console.log(e)
        }finally {
            setCarregando(false)
        }
    }

    function alterarCampo(event: any){
        const Ativ: any = { ...atividade}
        Ativ[event.target.name] = event.target.value
        setAtividade(Ativ)
    }

    function cancelar(){
        setAtividade(initialAtividade)
        setOpenM(false)
    }

    function atualizarLista(Serv: any, add = true) {
        const list = banco.filter(a => a.id !== Serv.id)
        if (add) list.push(Serv)
        return list
    }

    function salvar() {
        try {
            const Data = atividade
            const method = Data.id ? 'put' : 'post'
            const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
            axios[method](url, Data)
                .then(resp => {
                    const banco = atualizarLista(resp.data)
                    setAtividade(initialAtividade)
                    setBanco(banco)
                }).catch(erro => console.log(erro))

        } catch (e) {
            mensagemSistema("error", "filled", "Conexão com banco inválida")
        }
    }

    function load(registro: any){
        setOpenM(true)
        setAtividade(registro)
    }

    function verificar(){
            try{
                const { OS, Cliente, Servico, Equipamento, Modelo, NS } = atividade
    
                if(OS === "" || Cliente === "" || Servico === "" || Equipamento === "" || Modelo === "" || NS === ""){
                    mensagemSistema("error", "filled", "Faltou preencher o campo")
                }else {
                    if (atividade.Data === "") {
                        const dt: any = new Date()
    
                        atividade.Data = dt
                        atividade.Dia = dt.getDate()
                        atividade.Mes = dt.getMonth() + 1
                        atividade.Ano = dt.getFullYear()
                        atividade.Tecnico = localStorage.Tecnico
                        set("UltimaOS", atividade.OS)
                        
                    } else {
                        const dt: any = new Date(atividade.Data)
    
                        atividade.Dia = dt.getDate()
                        atividade.Mes = dt.getMonth() + 1
                        atividade.Ano = dt.getFullYear()
                        atividade.Tecnico = localStorage.Tecnico
                        set("UltimaOS", atividade.OS)
                    }
    
                    salvar()
                    cancelar()
                    mensagemSistema("success", "filled", "Salvo com Sucesso !!!")
                }
            }catch(e){
                mensagemSistema("error", "filled", "Conexão com banco inválida")
            }
        }  
        
        function mensagemSistema(tipo: severity, modelo: variant, mensagem: string) {
            setOpen(true)
            setMensagem({
                severity: tipo,
                variant: modelo,
                mensagem: mensagem
            })
        }

        function remove() {
            try{
                axios.delete(`${baseUrl}/${atividade.id}`)
                    .then(resp => {
                        const list = atualizarLista(atividade, false)
                        setBanco(list)
                        fecharRemove()
                        mensagemSistema("success", "filled", "Excluido com Sucesso !!!")
                    })
            }catch(e){
                mensagemSistema("error", "filled", "Falha em Excluir !!!")
            }
        }

        function abrirRemove(Atividade: Atividade){
            setExcluir(true)
            setAtividade(Atividade)
        }

        function fecharRemove(){
            setExcluir(false)
        }

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Tabela"
                        iconeTitulo={<IconTabela sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                    />
                </div>
                <div className='mt-10 grow'>
                    {carregando ? 
                        <div className="flex grow w-full items-center justify-center">
                            <Carregando cor="success" tamanho={300} grafico/>
                        </div>
                    
                    : <TabelaLab 
                        dados={banco} 
                        openM={openM} 
                        Atividade={atividade} 
                        mudarCampo={alterarCampo} 
                        limpar={cancelar} 
                        salvar={verificar} 
                        load={load}
                        excluir={excluir}
                        concluirExcluir={remove}
                        remove={abrirRemove}
                        excluirClose={fecharRemove}
                        /> }
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