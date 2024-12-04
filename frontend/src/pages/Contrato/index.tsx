"use client"
import { IconContrato} from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';
import FiltroContrato from './FiltroContrato';

export default function Contrato(){
    return(
        <Layout icone={<IconContrato fontSize='large'/>} texto="Contrato">
           <div className="flex flex-col dark:text-white max-sm:grid max-sm:grid-cols-1 h-[100%]">
                <div className="w-[100%] h-[85px] max-sm:h-[30%] flex justify-center mt-7">
                    <FiltroContrato />
                </div>
                <div>cards</div>
                <div>grafico 1 e 2</div>
                <div>grafico 3</div>
           </div>
        </Layout>
    )
}