"use client"
import { IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function Dashboard(){
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div>Dashbord</div>
        </Layout>
    )
}