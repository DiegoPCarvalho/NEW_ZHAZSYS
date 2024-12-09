"use client"
import { IconVHL, IconRelatorio } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { VhlUrl } from '@/data/config/vhlUrl';
import CardsRA from './CardsRA';
import GraficosRA from './GraficosRA';
import FiltroGnc from '@/components/shared/FiltroGnc';

export default function RelatorioVHL(){
    return(
        <Layout icone={<IconVHL fontSize='large'/>} texto="VHL">
            <div className='flex flex-col item-center h-full overflow-auto'>
                <div className='mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Relatório"
                        iconeTitulo={<IconRelatorio sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='flex justify-center mb-4'>
                    <FiltroGnc />
                </div>
                <div className="flex max-sm:justify-center max-sm:grid max-sm:grid-cols-1">
                    <CardsRA />
                    <GraficosRA />
                </div>
            </div>
        </Layout>
    )
}