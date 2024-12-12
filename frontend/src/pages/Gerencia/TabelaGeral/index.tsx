"use client"
import { IconGerencia, IconTabela } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import FiltroGnc from '@/components/shared/FiltroGnc';
import { GenUrl } from '@/data/config/GenUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import TabelaGen from './Tabela';
import { dado } from '@/data/db_teste/dado_teste';

export default function TabelaGeral(){
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
             <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Tabela Geral"
                        iconeTitulo={<IconTabela sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={GenUrl} dataMini={GenUrl}
                    />
                </div>
                <div className='max-sm:grid max-sm:grid-cols-1'>
                    <FiltroGnc modo='gerencia' semDia/>
                </div>
                <div className=''>
                    <TabelaGen dados={dado}/>
                </div>
            </div>
        </Layout>
    )
}