"use client"
import { IconQrcode, IconRegAntigo } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from '@/data/config/labUrl';
import TabelaRaLab from './TabelaRaLab';
import useAppData from "@/data/hook/useAppData";
import Banco from "@/data/database/banco";
import FiltroGnc from "@/components/shared/FiltroGnc";
import axios from "axios";
import { FiltroGncProps, initialFiltroGnc } from "@/data/interfaces/FiltroGncProps";
import { useState } from 'react';


export default function RegAntigoLabo() {
    const { userMain } = useAppData()
    const baseUrl = Banco("Geral")
    const [banco, setBanco] = useState<any[]>([])
    const [filtro, setFiltro] = useState<FiltroGncProps>(initialFiltroGnc)

    function AlterarCampo(event: any){
            const Filtro: any = { ...filtro }
            Filtro[event.target.name] = event.target.value
            setFiltro(Filtro)
        }
    
        async function BuscarDado(){
            const tabela = await axios(baseUrl).then(resp => {
                let dado = resp.data
                
    
                let tecnico = dado.filter((registro: any) => registro.Tecnico === userMain!.nomeCompleto)
                let ano = filtro.ano !== "Todos" ? tecnico.filter((registro: any) => registro.Ano === +filtro.ano) : tecnico
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
    
                return mes
            })

            return setBanco(tabela)
        }

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Reg. Antigo"
                        iconeTitulo={<IconRegAntigo sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                    />
                </div>
                <div className='max-sm:mt-10 mx-3 max-sm:w-[93%] max-sm:h-[97%]'>
                    <div className='flex justify-center'>
                        <FiltroGnc semDia filtro={filtro} alterarCampo={AlterarCampo} buscar={BuscarDado} />
                    </div>
                    <div className=''>
                        <TabelaRaLab dados={banco} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}