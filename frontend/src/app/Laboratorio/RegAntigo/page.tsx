"use client"
import { IconQrcode } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';

export default function RegAntigoLabo() {
    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratorio">
            <div>RegAntigoLabo</div>
        </Layout>
    )
}