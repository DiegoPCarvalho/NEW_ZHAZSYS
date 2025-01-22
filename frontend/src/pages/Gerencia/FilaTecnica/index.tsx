"use client"
import { IconFila, IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { GenUrl } from '@/data/config/GenUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import useAppData from "@/data/hook/useAppData";
import {useEffect} from 'react'
import CentroTelaGen from '@/components/FilaTecnica/CentroTelaGen';
import useFilaData from '@/data/hook/useFilaData';
import AddFila from '@/components/FilaTecnica/AddFila';
import useGncData from '@/data/hook/useGncData';

export default function FilaTecnica(){
    const { adminL2 } = useAppData()
    const { tela } = useFilaData()
    const { buscarContrato } = useGncData()

    useEffect(() => {
        buscarContrato!()
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
                    tela === "FilaGerenciada" ? "Filas" : "Excluir"}
            </div>
        </Layout>
    )
}