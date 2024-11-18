"use client"
import { IconContrato} from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';

export default function Contrato(){
    return(
        <Layout icone={<IconContrato fontSize='large'/>} texto="Contrato">
            <div>Contrato</div>
        </Layout>
    )
}