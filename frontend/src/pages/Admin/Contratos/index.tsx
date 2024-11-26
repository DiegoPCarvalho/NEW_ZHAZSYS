import Layout from "@/components/template/Layout"
import { IconContrato } from '@/components/icons/IconesMaterial';

export default function Contratos(){
    return(
        <Layout icone={<IconContrato fontSize='large' />} texto="Contratos">
            <div>Contratos</div>
        </Layout>
    
    )
}