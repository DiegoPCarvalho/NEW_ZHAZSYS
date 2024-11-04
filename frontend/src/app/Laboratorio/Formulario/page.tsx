"use client"
import { IconForm, IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from "@/data/config/labUrl"

export default function FormularioLabo() {

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Formulário"
                        iconeTitulo={<IconForm sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl}
                    />
                </div>
                <div className='border mt-10'>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                    <div>conteudo</div>
                </div>
            </div>
        </Layout>
    )
}