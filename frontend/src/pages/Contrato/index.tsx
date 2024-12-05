"use client"
import { IconContrato } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';
import FiltroContrato from './FiltroContrato';
import FileiraCards from './FileiraCards';
import Graficos from './Graficos';

export default function Contrato() {
    return (
        <Layout icone={<IconContrato fontSize='large' />} texto="Contrato">
            <div className="flex flex-col dark:text-white max-sm:grid max-sm:grid-cols-1 h-[100%]">
                <div className="w-[100%] h-[14%] max-sm:h-[30%] flex justify-center mt-7 max-sm:mt-3">
                    <FiltroContrato />
                </div>
                <div className='flex w-[100%] mt-7 h-[86%] max-sm:grid max-sm:grid-cols-1'>
                    <div className='w-[16%] h-[100%] max-sm:w-[100%]'>
                        <FileiraCards />
                    </div>
                    <div className='w-[84%] h-[100%] max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]'>
                       <Graficos />
                    </div>
                </div>
            </div>
        </Layout>
    )
}