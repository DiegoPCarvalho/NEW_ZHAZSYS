"use client"
import { IconForm, IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/navigatePage';

export default function FormularioLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col'>
                <div className='border h-20'>
                    <NavigatePage
                        titulo="Formulário"
                        iconeTitulo={<IconForm  sx={{ fontSize: 60}} className=" text-neutral-800 dark:text-neutral-200"/>}
                    />
                </div>
                <div className='border'>
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