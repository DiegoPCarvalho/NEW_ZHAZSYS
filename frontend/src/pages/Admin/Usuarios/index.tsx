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
import criptPassword  from "@/data/functions/Password";
import axios from 'axios'
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import Botao from "@/components/shared/Botao";
import { Mensagem } from "@/data/interfaces/Mensagem";

export default function Usuarios() {
    const [tela, setTela] = useState<boolean>(false);
    const [alterar, setAlterar] = useState<boolean>(false);
    const [banco, setBanco] = useState<any[]>([])
    const [usuario, setUsuario] = useState<Usuario>(initialUser)
    const [senha, setSenha] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const baseUrl = Banco("LoginUsuario")

    const mensagem: Mensagem = {
        severity: "warning",
        variant: "standard",
        memsagem: "Salvo com sucesso !!!"
    }   

    async function BuscarDados() {
        const dado = await axios(baseUrl).then(resp => resp.data)
        setBanco(dado)
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
        if(alterar === true){
            setUsuario(initialUser)
            setTela(false)

        }else {
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
    }

    function validarRemove(usuario: Usuario) {
        remover(usuario, baseUrl)
        atualizarLista(usuario, false)
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

 function validarCampo(){
        const { NomeCompleto, Email, Departamento, Acesso, Contrato, FotoUrl } = usuario

        if(NomeCompleto === '' || Email === '' || Departamento === '' || Acesso === '' || Contrato === '' || FotoUrl === ''){
            console.log("faltou campo")
        }else {
            try{
                if(alterar){
                    usuario.Senha = senha === "" ? usuario.Senha : criptPassword(senha)
                    salvar(usuario, baseUrl)
                    setUsuario(initialUser)
                    mudarTela(!tela)
                    setSenha("")
                }else {
                    usuario.Senha = criptPassword(senha)
                    salvar(usuario, baseUrl)
                    setUsuario(initialUser)
                    setSenha("")
                    setAlterar(false)
                }
            }catch(e){

            }
        }

    }

    function atualizarLista(Usuario: any, add = true) {
        const list = banco.filter(a => a.id !== Usuario.id)
        if (add) list.push(Usuario)
        setBanco(list)
    }

    async function mudarTela(tela: boolean){
        if(tela){
            await BuscarDados()
            setTela(tela)
        }else {
            setTela(tela)
        }
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
                        {tela ? <FormUsers status={mensagem} open={open} close={close} senha={senha} setSenha={setSenha} verificar={() => validarCampo()} baseUrl={baseUrl} usuario={usuario} limpar={limpar} mudar={(e) => mudarCampo(e)} /> :
                            <TableUsers remove={validarRemove} dados={banco} load={load} />
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}