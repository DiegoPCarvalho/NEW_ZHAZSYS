"use client"
import { IconPerfil } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';
import FormPerfil from './FormPerfil';
import FotoPerfil from './FotoPerfil';
import BasicModal from '@/components/Modal/ModalFotoUser';

export default function Perfil() {
    return (
        <Layout icone={<IconPerfil fontSize='large' />} texto="Perfil">
            <div className="flex max-sm:flex-col-reverse h-full">
                <div className='flex items-center w-[70%] max-sm:w-[100%] max-sm:h-[70%]'>
                    <FormPerfil />
                </div>
                <div className='flex flex-col w-[30%] max-sm:flex-col max-sm:w-[100%] max-sm:h-[30%]'>
                    <div className='flex items-center w-[100%] h-[50%] max-sm:h-[100%]'>
                        <FotoPerfil />
                    </div>
                    <BasicModal />
                </div>
            </div>
        </Layout>
    )
}