"use client"
import { IconRegAntigo, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { dado } from '@/data/db_teste/dado_teste';
import { VhlUrl } from '@/data/config/vhlUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import TabelaAntigaVhl from './TabelaAntiga';
import FiltroGnc from '@/components/shared/FiltroGnc';

export default function RegAntigoVHL(){
    return(
        <Layout icone={<IconVHL fontSize='large'/>} texto="VHL">
            <div className='flex flex-col item-center h-[100%] overflow-auto'>
                <div className='mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Reg. Antigo"
                        iconeTitulo={<IconRegAntigo sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='max-sm:mt-10 mx-3 max-sm:w-[93%] max-sm:h-[97%]'>
                    <div className='flex justify-center'>
                        <FiltroGnc semDia />
                    </div>
                    <div className=''>
                       <TabelaAntigaVhl dados={dado}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}