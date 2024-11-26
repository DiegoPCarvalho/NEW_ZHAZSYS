"use client"
import { IconForm, IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from "@/data/config/labUrl"
import FormLab from './FormLab';
import CentroTelaForm from './CentroTelaForm';

export default function FormularioLabo() {

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Formulário"
                        iconeTitulo={<IconForm sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                        centroTela={<CentroTelaForm os="12345" />}
                    />
                </div>
                <div className='mt-5 mx-3 bg-white dark:bg-zinc-950 dark:border-zinc-800 dark:shadow-md border rounded-md shadow-lg overflow-auto'>
                    <FormLab />
                </div>
            </div>
        </Layout>
    )
}