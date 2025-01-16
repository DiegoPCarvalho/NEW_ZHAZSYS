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
import useDashData from '@/data/hook/useDashData';
import useGncData from '@/data/hook/useGncData';
import Carregando from '@/components/shared/Carregando';

export default function Dashboard(){
    const { adminL2 } = useAppData()
    const { filtro, alterarCampo, buscarDado, carregando } = useDashData();
    const { buscarTecnicoGen } = useGncData();
    

    useEffect(() => {
        adminL2!()
        buscarTecnicoGen!()
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
                    <FiltroGnc modo='gerencia' filtro={filtro!} alterarCampo={alterarCampo!} buscar={buscarDado}/>
                </div>
                <div className='flex h-[675px] max-2xl:h-[470px] max-[1520px]:h-[670px] overflow-auto mt-2 max-sm:grid max-sm:grid-cols-1'>
                    {carregando ? <div className="flex items-center justify-center w-full">
                        <Carregando cor='success' tamanho={350} grafico/>
                    </div>
                    :
                    <>
                        <Cards />
                        <Graficos />
                    </>}
                </div>
            </div>
        </Layout>
    )
}