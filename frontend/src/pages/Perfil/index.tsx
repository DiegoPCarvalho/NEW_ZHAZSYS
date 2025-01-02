"use client"
import { IconPerfil } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';
import FormPerfil from './FormPerfil';
import FotoPerfil from './FotoPerfil';
import BasicModal from '@/components/Modal/ModalFotoUser';
import { useState } from 'react';
import useAppData from '@/data/hook/useAppData';
import { salvar } from '@/data/functions/Salvar';
import useLocalStorage from '@/data/hook/useLocalStorage';
import Banco from '@/data/database/banco';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { criptgrafiaSenha } from '@/data/functions/CriptoSenha';
import { Mensagem, initialMSG } from "@/data/interfaces/Mensagem";
import { severity, variant } from "@/data/type/mensagemSistema";
import useAuthData from '@/data/hook/useAuthData';


export default function Perfil() {
    const { logout } = useAuthData()
    const baseUrl = Banco("LoginUsuario")
    const { set } = useLocalStorage()
    const { perfilUser, mudarCampo } = useAppData()
    const [openModalFoto, setOpenModalFoto] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [senha, setSenha] = useState<string>("")
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const [editar, setEditar] = useState<boolean>(false);
    

    function save(){
        try{
            salvar(perfilUser, baseUrl)
            set("UserMain", perfilUser)
            setOpenModalFoto(false)
        }catch(e){
            console.log(e)
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


    const close = (
            event?: React.SyntheticEvent | Event,
            reason?: SnackbarCloseReason,
        ) => {
            if (reason === 'clickaway') {
                return;
            }
    
            setOpen(false);
    };

    function salvarSenha(){
        try{
            if(senha === "" || confirmarSenha === ""){
                mensagemSistema("error", "filled", "Faltou preencher algum(s) campo(s)")
            }else {
                if(senha === confirmarSenha){
                    const dadosSenha = criptgrafiaSenha(senha)
                    perfilUser.senha = dadosSenha

                    salvar(perfilUser, baseUrl)
                    mensagemSistema("success", "filled", "Alterado com Sucesso !!!")
                    
                    setSenha("")
                    setConfirmarSenha("")
                    
                    setTimeout(() => {
                        logout!()
                    }, 3000)

                }else {
                    mensagemSistema("error", "filled", "Senhas Não Conferem")
                }
            }
        }catch(e){
            mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
        }
    }

    function cancelar(){
        setEditar(false)
        setSenha("")
        setConfirmarSenha("")
    }

    return (
        <Layout icone={<IconPerfil fontSize='large' />} texto="Perfil">
            <div className="flex max-sm:flex-col-reverse h-full">
                <div className='flex items-center w-[70%] max-sm:w-[100%] max-sm:h-[70%]'>
                    <FormPerfil  
                        user={perfilUser}
                        open={open}
                        close={close}
                        senha={senha}
                        setSenha={setSenha}
                        confirmarSenha={confirmarSenha}
                        setConfirmarSenha={setConfirmarSenha}
                        salvar={salvarSenha}
                        mensagem={mensagem}
                        editar={editar}
                        setEditar={() => setEditar(true)}
                        cancelar={cancelar}
                    />
                </div>
                <div className='flex flex-col w-[30%] max-sm:flex-col max-sm:w-[100%] max-sm:h-[30%]'>
                    <div className='flex items-center w-[100%] h-[50%] max-sm:h-[100%]'>
                        <FotoPerfil 
                            imagem={perfilUser.fotoUrl}
                            nome={perfilUser.nomeCompleto} 
                            departamento={perfilUser.departamento} 
                            email={perfilUser.email}
                            especialidade={perfilUser.especialidade}
                            foto={() => setOpenModalFoto(true)}
                            />
                    </div>
                    <BasicModal 
                        open={openModalFoto} 
                        close={() => setOpenModalFoto(false)} 
                        fotoUrl={perfilUser.fotoUrl} 
                        mudarValorCampo={e => mudarCampo!(e)}
                        save={save}    
                        />
                </div>
            </div>
        </Layout>
    )
}