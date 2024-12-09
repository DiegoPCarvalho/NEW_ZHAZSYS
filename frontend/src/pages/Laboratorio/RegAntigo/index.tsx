"use client"
import { IconQrcode, IconRegAntigo } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from '@/data/config/labUrl';
import TabelaRaLab from './TabelaRaLab';
import { dado } from '@/data/db_teste/dado_teste';

export default function RegAntigoLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
             <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Reg. Antigo"
                        iconeTitulo={<IconRegAntigo sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                    />
                </div>
                <TabelaRaLab dados={dado}/>
            </div>
        </Layout>
    )
}