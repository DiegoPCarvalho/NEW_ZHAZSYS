"use client"
import { IconFila, IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { GenUrl } from '@/data/config/GenUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import useAppData from "@/data/hook/useAppData";
import {useEffect, useState} from 'react'
import CentroTelaGen from '@/components/FilaTecnica/CentroTelaGen';
import useFilaData from '@/data/hook/useFilaData';
import AddFila from '@/components/FilaTecnica/AddFila';
import useGncData from '@/data/hook/useGncData';
import ModalFilaGen from '@/components/Modal/ModalFilaGen';
import ConsultaDados from '@/components/FilaTecnica/ConsultaDado';
import Filas from '@/components/FilaTecnica/Filas';
import DelFila from '@/components/FilaTecnica/DelFila';
import ModalMudarFila from '@/components/Modal/ModalMudarFila';

export default function FilaTecnica(){
    const { adminL2 } = useAppData()
    const { tela, openMS, setOpenMS, openModalMudar, closeModalMudar, dadoMudarFila } = useFilaData()
    const { buscarContrato, buscarTecnicoGen } = useGncData()

    useEffect(() => {
        buscarContrato!()
        buscarTecnicoGen!()
        adminL2!()
    }, [])
    
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Fila Técnica"
                        iconeTitulo={<IconFila sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={GenUrl} dataMini={GenUrl}
                        centroTela={<CentroTelaGen />}
                    />
                </div>
                {tela === "AddFila" ? <AddFila /> : 
                    tela === "FilaGerenciada" ? <Filas /> : <DelFila />}
            </div>
            <ModalFilaGen open={openMS} close={() => setOpenMS!(false)} className="top-[30%] left-[40%] max-xl:left-[20%]">
                <ConsultaDados />
            </ModalFilaGen>
            <ModalMudarFila open={openModalMudar} close={closeModalMudar} dado={dadoMudarFila} className='top-[20%] left-[37%] max-xl:left-[20%]'/>
        </Layout>
    )
}