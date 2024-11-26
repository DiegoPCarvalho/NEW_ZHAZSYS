import Layout from "@/components/template/Layout"
import { IconDepartamento } from '@/components/icons/IconesMaterial';

export default function Departamentos(){
    return(
        <Layout icone={<IconDepartamento fontSize='large' />} texto="Departamentos">
            <div>Departamentos</div>
        </Layout>
    
    )
}