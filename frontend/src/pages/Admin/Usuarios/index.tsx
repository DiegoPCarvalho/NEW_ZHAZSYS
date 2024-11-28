import Layout from "@/components/template/Layout"
import { IconUser, IconAdmin, IconAddUser, IconVoltarAdmin } from '@/components/icons/IconesMaterial';
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { AdminUrl } from "@/data/config/adminUrl";
import AddItem from "@/components/shared/AddItem";
import { useState } from "react";
import FormUsers from "./FormUsers";
import TableUsers from "./TableUsers";

export default function Usuarios(){
    const [tela, setTela] = useState<boolean>(false);

    return(
        <Layout icone={<IconAdmin fontSize='large' />} texto="Admin">
             <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Usuários"
                        iconeTitulo={<IconUser sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={AdminUrl} dataMini={AdminUrl} excecao
                        // centroTela={<CentroTelaForm os="12345" />}
                    />
                </div>
                <div className='flex flex-col mt-5 mx-3 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:shadow-md rounded-md shadow-lg overflow-auto'>
                    <div className="flex justify-end my-2 mr-2 h-16">
                        <AddItem icone={tela ? IconVoltarAdmin : IconAddUser} executar={() => setTela(!tela)} voltar={tela}/>
                    </div>
                    <div className="flex justify-center">
                        {tela ? <FormUsers /> : <TableUsers />}
                    </div>
                </div>
            </div>
        </Layout>
    
    )
}