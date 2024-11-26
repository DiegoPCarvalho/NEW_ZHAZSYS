import Layout from "@/components/template/Layout"
import { IconUser } from '@/components/icons/IconesMaterial';

export default function Usuarios(){
    return(
        <Layout icone={<IconUser fontSize='large' />} texto="Usuários">
            <div>usuarios</div>
        </Layout>
    
    )
}