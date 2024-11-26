import Layout from "@/components/template/Layout"
import { IconEquipamento } from '@/components/icons/IconesMaterial';

export default function Equipamentos(){
    return(
        <Layout icone={<IconEquipamento fontSize='large' />} texto="Equipamentos">
            <div>Equipamentos</div>
        </Layout>
    
    )
}