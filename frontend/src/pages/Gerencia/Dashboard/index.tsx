"use client"
import { IconDash, IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { GenUrl } from '@/data/config/GenUrl';
import FiltroGnc from '@/components/shared/FiltroGnc';
import Cards from './Cards';
import Graficos from './Graficos';

export default function Dashboard(){
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Dashboard"
                        iconeTitulo={<IconDash sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={GenUrl} dataMini={GenUrl}
                    />
                </div>
                <div className='max-sm:grid max-sm:grid-cols-1'>
                    <FiltroGnc modo='gerencia'/>
                </div>
                <div className='flex mt-2 max-sm:grid max-sm:grid-cols-1'>
                    <Cards />
                    <Graficos />
                </div>
            </div>
        </Layout>
    )
}