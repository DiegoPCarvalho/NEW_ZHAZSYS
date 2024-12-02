import Layout from "@/components/template/Layout"
import { IconUser, IconAdmin, IconAddUser, IconVoltarAdmin } from '@/components/icons/IconesMaterial';
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { AdminUrl } from "@/data/config/adminUrl";
import AddItem from "@/components/shared/AddItem";
import { useState } from "react";
import FormUsers from "./FormUsers";
import TableUsers from "./TableUsers";
import { dado } from "@/data/db_teste/dado_teste";

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
                <div className='flex flex-col mt-2 mx-3  dark:border-neutral-800 dark:shadow-md rounded-md  overflow-auto'>
                    <div className="flex justify-end mr-2 h-16">
                        <AddItem icone={tela ? IconVoltarAdmin : IconAddUser} executar={() => setTela(!tela)} voltar={tela}/>
                    </div>
                    <div className="flex mx-3">
                        {tela ? <FormUsers /> : <TableUsers dados={dado}/>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}