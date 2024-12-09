"use client"
import { IconQrcode, IconRelatorio } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from '@/data/config/labUrl';
import FiltroGnc from '@/components/shared/FiltroGnc';
import CardsLab from './CardsLab';
import GraficosLab from './GraficosLab';

export default function RelatorioLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
             <div className='flex flex-col h-full'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Relatório"
                        iconeTitulo={<IconRelatorio sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                    />
                </div>
                <div className='mt-5'>
                    <FiltroGnc />
                </div>
                <div className="flex mt-5 h-full max-sm:grid max-sm:grid-cols-1">
                    <CardsLab />
                    <GraficosLab />
                </div>
            </div>
        </Layout>
    )
}