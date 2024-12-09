"use client"
import { IconContrato } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';
import FileiraCards from './FileiraCards';
import Graficos from './Graficos';
import FiltroGnc from '@/components/shared/FiltroGnc';

export default function Contrato() {
    return (
        <Layout icone={<IconContrato fontSize='large' />} texto="Contrato">
            <div className="flex flex-col dark:text-white max-sm:grid max-sm:grid-cols-1 h-full w-full">
                <div className="h-[14%] max-sm:h-[30%] flex justify-center mt-3 max-sm:mt-3">
                    <FiltroGnc modo="contrato"/>
                </div>
                <div className='flex mt-7 h-[86%] max-sm:grid max-sm:grid-cols-1 justify-between'>
                    <div className='max-sm:w-[100%]'>
                        <FileiraCards />
                    </div>
                    <div className='grow ml-10 max-sm:ml-0 h-[100%] max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]'>
                       <Graficos />
                    </div>
                </div>
            </div>
        </Layout>
    )
}