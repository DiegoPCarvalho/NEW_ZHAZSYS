"use client"
import { IconDash, IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { GenUrl } from '@/data/config/GenUrl';
import FiltroGnc from '@/components/shared/FiltroGnc';
import Cards from './Cards';
import Graficos from './Graficos';
import useAppData from "@/data/hook/useAppData";
import {useEffect} from 'react'

export default function Dashboard(){
    const { adminL2 } = useAppData()

    useEffect(() => {
        adminL2!()
    }, [])

    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-16 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Dashboard"
                        iconeTitulo={<IconDash sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={GenUrl} dataMini={GenUrl}
                    />
                </div>
                <div className='max-sm:grid max-sm:grid-cols-1'>
                    <FiltroGnc modo='gerencia'/>
                </div>
                <div className='flex h-[640px] max-2xl:h-[470px] overflow-auto mt-2 max-sm:grid max-sm:grid-cols-1'>
                    <Cards />
                    <Graficos />
                </div>
            </div>
        </Layout>
    )
}