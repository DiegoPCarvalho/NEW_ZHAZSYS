"use client"
import { IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function FilaTecnicaLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratorio">
            <div>FilaTecnicaLabo</div>
        </Layout>
    )
}