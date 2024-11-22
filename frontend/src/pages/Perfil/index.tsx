"use client"
import { IconPerfil } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';

export default function Perfil() {
    return (
        <Layout icone={<IconPerfil fontSize='large' />} texto="Perfil">
            <div className="flex max-sm:flex-col-reverse h-full">
                <div className='border flex w-[70%] max-sm:w-[100%] max-sm:h-[70%]'>
                    <div className='bg-white flex w-[100%] shadow-lg rounded-md'>
                        5
                    </div>
                </div>
                <div className='flex flex-col w-[30%] max-sm:flex-row max-sm:w-[100%] max-sm:h-[30%]'>
                    <div className='border flex w-[100%] h-[50%] max-sm:h-[100%]'>
                        <div className='bg-white flex flex-col h-[100%] w-[100%] shadow-lg rounded-md'>
                            5
                        </div>
                    </div>
                    <div className='border flex w-[100%] h-[50%] max-sm:h-[100%]'>
                        <div className='bg-white flex w-[100%] shadow-lg rounded-md'>
                            5
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}