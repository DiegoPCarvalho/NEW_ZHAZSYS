"use client"
import { IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function RelatorioLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratorio">
            <div>RelatorioLabo</div>
        </Layout>
    )
}