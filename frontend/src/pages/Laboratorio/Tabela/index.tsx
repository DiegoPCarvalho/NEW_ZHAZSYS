"use client"
import { IconQrcode, IconTabela } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from '@/data/config/labUrl';
import TabelaLab from './TabelaLab';
import { dado } from "@/data/db_teste/dado_teste";


export default function TabelaLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Tabela"
                        iconeTitulo={<IconTabela sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                    />
                </div>
                <div className='mt-10'>
                    <TabelaLab dados={dado}/>
                </div>
            </div>
        </Layout>
    )
}