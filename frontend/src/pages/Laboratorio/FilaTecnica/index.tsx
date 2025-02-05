"use client"
import { IconQrcode, IconFila } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from "@/data/config/labUrl"
import CentroTela from './CentroTela';
import FilaUser from './FilaUser';
import { useEffect } from 'react';
import useFilaData from '@/data/hook/useFilaData';
import ModalProblema from '@/components/Modal/ModalProblema';
import ModalDownload from '@/components/Modal/ModalDownload';

export default function FilaTecnicaLabo() {

    const {buscarFilaDownload, buscarFilaUser, obsProblema, setObsProblema, openModalProblema, fecharModalProblema, openModalDownload, setOpenModalDownload } = useFilaData()

    useEffect(() => {
        buscarFilaUser!()
        buscarFilaDownload!()
    }, [])

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
             <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Fila Técnica"
                        iconeTitulo={<IconFila sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                        centroTela={<CentroTela />}
                    />
                </div>
                <div className='mt-10'>
                    <FilaUser />
                </div>
                <ModalProblema 
                    open={openModalProblema} 
                    close={fecharModalProblema} 
                    obsProblema={obsProblema} 
                    alterarCampo={setObsProblema} 
                    className='top-[30%] left-[40%] max-xl:top-[30%]' />
                    
                <ModalDownload 
                    open={openModalDownload}
                    close={() => setOpenModalDownload!(false)}
                    className="top-[15%] left-[33%] max-[1024px]:left-[20%]"
                />
            </div>
        </Layout>
    )
}