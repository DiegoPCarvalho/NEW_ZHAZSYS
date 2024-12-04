import Layout from "@/components/template/Layout"
import { IconAdmin, IconRamal } from '@/components/icons/IconesMaterial';
import NavigatePage from "@/components/navigatePage/NavigatePage";
import { dado } from "@/data/db_teste/dado_teste";
import TabelaRamais from "./TabelaRamais";
import { AdminUrl } from "@/data/config/adminUrl";
import FormRamais from "./FormRamais";

export default function Ramais() {
    return (
        <Layout icone={<IconAdmin fontSize='large' />} texto="Administrador">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Ramais"
                        iconeTitulo={<IconRamal sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={AdminUrl} dataMini={AdminUrl} excecao
                    />
                </div>
            </div>
            <div className='flex flex-col items-center mt-3 mx-3  rounded-md  overflow-auto'>
                <div className="flex w-[70%] max-sm:w-[100%] justify-center">
                    <FormRamais />
                </div>
                <div className="flex w-[90%] max-sm:w-[100%] justify-center">
                    <TabelaRamais dados={dado} />
                </div>
            </div>
        </Layout>
    )
}