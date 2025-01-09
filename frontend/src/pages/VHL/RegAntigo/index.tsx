"use client"
import { IconRegAntigo, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { VhlUrl } from '@/data/config/vhlUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import TabelaAntigaVhl from './TabelaAntiga';
import FiltroGnc from '@/components/shared/FiltroGnc';
import { useState } from 'react';
import { initialFiltroGnc, FiltroGncProps } from '@/data/interfaces/FiltroGncProps';
import Banco from '@/data/database/banco';
import axios from 'axios';

export default function RegAntigoVHL(){
    const [filtro, setFiltro] = useState<FiltroGncProps>(initialFiltroGnc)
    const [banco, setBanco] = useState<any[]>([])
    const baseUrl = Banco("VHL")

    function AlterarCampo(event: any){
        const Filtro: any = { ...filtro }
        Filtro[event.target.name] = event.target.value
        setFiltro(Filtro)
    }

    async function buscarDado(){
        const tabela = await axios(baseUrl).then(resp => {
            let dado = resp.data

            const ano = filtro.ano !== "Todos" ? dado.filter((registro: any) => registro.Ano === +filtro.ano) : []
            const mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano

            return mes
        })

        return setBanco(tabela)
    }

    return(
        <Layout icone={<IconVHL fontSize='large'/>} texto="VHL">
            <div className='flex flex-col item-center h-[100%] overflow-auto'>
                <div className='mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Reg. Antigo"
                        iconeTitulo={<IconRegAntigo sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='max-sm:mt-10 mx-3 max-sm:w-[93%] max-sm:h-[97%]'>
                    <div className='flex justify-center'>
                        <FiltroGnc semDia filtro={filtro} alterarCampo={AlterarCampo} buscar={buscarDado}/>
                    </div>
                    <div className=''>
                       <TabelaAntigaVhl dados={banco}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}