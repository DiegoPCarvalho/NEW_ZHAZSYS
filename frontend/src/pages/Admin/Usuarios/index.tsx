import Layout from "@/components/template/Layout"
import { IconUser, IconAdmin, IconAddUser, IconVoltarAdmin } from '@/components/icons/IconesMaterial';
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { AdminUrl } from "@/data/config/adminUrl";
import AddItem from "@/components/shared/AddItem";
import { useState, useEffect } from "react";
import FormUsers from "./FormUsers";
import TableUsers from "./TableUsers";
import Banco from "@/data/database/banco";
import { Usuario, initialUser } from "@/data/interfaces/Usuario";
import { remover } from "@/data/functions/Deletar";
import { salvar } from "@/data/functions/Salvar";
import criptPassword from "@/data/functions/Password";
import axios from 'axios'
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Alert, Snackbar } from "@mui/material";
import { Mensagem, initialMSG } from "@/data/interfaces/Mensagem";
import { severity, variant } from "@/data/type/mensagemSistema";

export default function Usuarios() {
    const [tela, setTela] = useState<boolean>(false);
    const [alterar, setAlterar] = useState<boolean>(false);
    const [banco, setBanco] = useState<any[]>([])
    const [usuario, setUsuario] = useState<Usuario>(initialUser)
    const [senha, setSenha] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const baseUrl = Banco("LoginUsuario")

    
    async function BuscarDados() {
        try{
            const dado = await axios(baseUrl).then(resp => resp.data)
            setBanco(dado)
        }catch(e){
            mensagemSistema("error", "filled", "Banco de Dados Offline !!!")
        }
    }

    useEffect(() => {
        BuscarDados()
    }, [])


    function mudarCampo(event: any) {
        const User: any = { ...usuario }
        User[event.target.name] = event.target.value
        setUsuario(User)
    }

    function limpar() {
        if (alterar === true) {
            setUsuario(initialUser)
            setTela(false)

        } else {
            setUsuario(initialUser)
            setAlterar(false)
            setSenha("")
        }
    }

    function load(usuario: Usuario) {
        setUsuario(usuario)
        setTela(true)
        setAlterar(true)
        setSenha("")
        mensagemSistema("success", "filled", "Carregado com Sucesso !!!")
    }

    function validarRemove(usuario: Usuario) {
        try{
            remover(usuario, baseUrl)
            atualizarLista(usuario, false)
            mensagemSistema("success", "filled", "Excluido com Sucesso !!!")
        }catch(e){
            mensagemSistema("error", "filled", "Falha em Excluir !!!")
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

    function validarCampo() {
        const { nomeCompleto, email, departamento, acesso, contrato } = usuario

        if (nomeCompleto === '' || email === '' || departamento === '' || acesso === '' || contrato === '') {
            mensagemSistema("error", "filled", "Faltou preencher algum(s) campo(s)")
        } else {
            try {
                if (alterar) {
                    usuario.senha = senha === "" ? usuario.senha : criptPassword(senha)
                    salvar(usuario, baseUrl)
                    setUsuario(initialUser)
                    mudarTela(!tela)
                    setSenha("")
                    mensagemSistema("success", "filled", "Alterado com Sucesso !!!")
                } else {
                    usuario.senha = criptPassword(senha)
                    salvar(usuario, baseUrl)
                    setUsuario(initialUser)
                    setSenha("")
                    setAlterar(false)
                    mensagemSistema("success", "filled", "Salvo com Sucesso !!!")
                }
            } catch (e) {
                mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
            }
        }

    }

    function atualizarLista(Usuario: any, add = true) {
        const list = banco.filter(a => a.id !== Usuario.id)
        if (add) list.push(Usuario)
        setBanco(list)
    }

    async function mudarTela(tela: boolean) {
        await BuscarDados()
        setUsuario(initialUser)
        setSenha("")
        setTela(tela)
    }


    return (
        <Layout icone={<IconAdmin fontSize='large' />} texto="Administrador">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Usuários"
                        iconeTitulo={<IconUser sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={AdminUrl} dataMini={AdminUrl} excecao
                    />
                </div>
                <div className='flex flex-col mt-5 mx-3  rounded-md  overflow-auto'>
                    <div className="flex justify-end mr-2 h-16">
                        <AddItem icone={tela ? IconVoltarAdmin : IconAddUser} executar={() => mudarTela(!tela)} voltar={tela} />
                    </div>
                    <div className="flex mx-3">
                        {tela ? <FormUsers senha={senha} setSenha={setSenha} verificar={() => validarCampo()} usuario={usuario} limpar={limpar} mudar={(e) => mudarCampo(e)} /> :
                            <TableUsers remove={validarRemove} dados={banco} load={load} />
                        }
                    </div>
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