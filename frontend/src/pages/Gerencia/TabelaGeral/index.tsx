"use client"
import { IconGerencia } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function TabelaGeral(){
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
            <div>Tabela Geral</div>
        </Layout>
    )
}