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

export default function Usuarios(){
    const [tela, setTela] = useState<boolean>(false);
    const [banco, setBanco] = useState<any[]>([])
    const [usuario, setUsuario] = useState<Usuario>(initialUser)
    const baseUrl = Banco("LoginUsuario")

    async function BuscarDados(){
        const dado = await fetch(baseUrl).then(resp => resp.json())
        setBanco(dado)
    }

    useEffect(() => {
        BuscarDados()
    }, [])


    function mudarCampo(event: any){
        const User : any = { ...usuario }
        User[event.target.name] = event.target.value
        setUsuario(User)
    }

    function limpar(){
        setUsuario(initialUser)
    }

    function load(usuario: Usuario){
        setUsuario(usuario)
        setTela(true)
    }

    function validarRemove(usuario: Usuario){
       remover(usuario, baseUrl)
    }
    

    return(
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
                        <AddItem icone={tela ? IconVoltarAdmin : IconAddUser} executar={() => setTela(!tela)} voltar={tela}/>
                    </div>
                    <div className="flex mx-3">
                        {tela ? <FormUsers baseUrl={baseUrl} usuario={usuario} limpar={limpar} mudar={(e) => mudarCampo(e)}/> :                         
                            <TableUsers remove={validarRemove} dados={banco} load={load}/>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}