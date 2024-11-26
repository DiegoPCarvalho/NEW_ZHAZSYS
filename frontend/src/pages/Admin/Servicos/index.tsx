import Layout from "@/components/template/Layout"
import { IconServico } from '@/components/icons/IconesMaterial';

export default function Servicos(){
    return(
        <Layout icone={<IconServico fontSize='large' />} texto="Serviços">
            <div>Serviços</div>
        </Layout>
    
    )
}