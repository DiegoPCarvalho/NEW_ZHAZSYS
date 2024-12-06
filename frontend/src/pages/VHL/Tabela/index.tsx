"use client"
import { IconTabela, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { VhlUrl } from '@/data/config/vhlUrl';
import TabelaVhl from './TabelaVhl';
import { dado } from '@/data/db_teste/dado_teste';

export default function TabelaMainVHL(){
    return(
        <Layout icone={<IconVHL fontSize='large'/>} texto="VHL">
            <div className='flex flex-col item-center h-[100%] overflow-auto'>
                <div className='h-[15%] mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Tabela"
                        iconeTitulo={<IconTabela sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='h-[85%] max-sm:mt-10 mx-3 max-sm:w-[93%] max-sm:h-[97%]'>
                    <TabelaVhl dados={dado}/>
                </div>
            </div>
        </Layout>
    )
}