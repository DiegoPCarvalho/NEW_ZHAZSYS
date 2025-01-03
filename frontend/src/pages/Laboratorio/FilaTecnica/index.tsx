"use client"
import { IconQrcode, IconFila } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from "@/data/config/labUrl"

export default function FilaTecnicaLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
             <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Fila Técnica"
                        iconeTitulo={<IconFila sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
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