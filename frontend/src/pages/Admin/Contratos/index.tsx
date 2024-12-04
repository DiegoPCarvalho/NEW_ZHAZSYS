import Layout from "@/components/template/Layout"
import { IconAdmin, IconContrato } from '@/components/icons/IconesMaterial';
import { dado } from "@/data/db_teste/dado_teste";
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { AdminUrl } from "@/data/config/adminUrl";
import FormContratos from "./FormContratos";
import TabelaContratos from "./TabelaContratos";

export default function Contratos(){
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
                    <FormContratos />
                </div>
                <div className="flex w-[90%] max-sm:w-[100%] justify-center">
                    <TabelaContratos dados={dado}/>
                </div>
            </div>
        </Layout>
    )
}