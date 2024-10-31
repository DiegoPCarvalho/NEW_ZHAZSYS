"use client"
import { IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function TabelaLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratorio">
            <div>TabelaLabo</div>
        </Layout>
    )
}