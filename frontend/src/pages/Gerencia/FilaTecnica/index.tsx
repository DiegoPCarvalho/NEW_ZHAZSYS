"use client"
import { IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function FilaTecnica(){
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div>Fila Tecnica</div>
        </Layout>
    )
}