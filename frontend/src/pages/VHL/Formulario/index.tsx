"use client"
import { IconForm, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { VhlUrl } from '@/data/config/vhlUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import FormVhl from './FormVHL';

export default function FormularioVHL() {
    return (
        <Layout icone={<IconVHL fontSize='large' />} texto="VHL">
            <div className='flex flex-col item-center h-[100%] overflow-auto'>
                <div className='h-[15%] mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Formulário"
                        iconeTitulo={<IconForm sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='h-[85%] max-sm:mt-1 mx-3 max-sm:w-[100%] max-sm:h-[97%]'>
                    <FormVhl />
                </div>
            </div>
        </Layout>
    )
}