"use client"
import { IconRegAntigo, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { dado } from '@/data/db_teste/dado_teste';
import { VhlUrl } from '@/data/config/vhlUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import TabelaAntigaVhl from './TabelaAntiga';
import FiltroAntigo from './FiltroAntigo';

export default function RegAntigoVHL(){
    return(
        <Layout icone={<IconVHL fontSize='large'/>} texto="VHL">
            <div className='flex flex-col item-center h-[100%] overflow-auto'>
                <div className='h-[15%] mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Reg. Antigo"
                        iconeTitulo={<IconRegAntigo sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='h-[85%]  max-sm:mt-10 mx-3 max-sm:w-[93%] max-sm:h-[97%]'>
                    <div className='flex justify-center h-[16%]'>
                        <FiltroAntigo />
                    </div>
                    <div className='h-[90%]'>
                       <TabelaAntigaVhl dados={dado}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}