"use client"
import { IconPerfil } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';

export default function Perfil(){
    return(
        <Layout icone={<IconPerfil fontSize='large'/>} texto="Perfil">
            <div>Perfil</div>
        </Layout>
    )
}