"use client"
import { IconGerencia, IconTabela } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import FiltroGnc from '@/components/shared/FiltroGnc';
import { GenUrl } from '@/data/config/GenUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import TabelaGen from './Tabela';
import useAppData from "@/data/hook/useAppData";
import {useEffect, useState} from 'react'
import Banco from '@/data/database/banco';
import { FiltroGncProps, initialFiltroGnc } from '@/data/interfaces/FiltroGncProps';
import axios from "axios";
import useGncData from '@/data/hook/useGncData';
import Carregando from '@/components/shared/Carregando';

export default function TabelaGeral(){
    const { adminL2 } = useAppData()
    const { buscarTecnicoGen } = useGncData()
    const baseUrl = Banco("Geral")
    const [banco, setBanco] = useState<any[]>([])
    const [filtro, setFiltro] = useState<FiltroGncProps>(initialFiltroGnc)
    const [carregando, setCarregando] = useState<boolean>(false)

    useEffect(() => {
        adminL2!()
        buscarTecnicoGen!()
    }, [])

    function AlterarCampo(event: any){
        const Filtro: any = { ...filtro }
        Filtro[event.target.name] = event.target.value
        setFiltro(Filtro)
    }

    async function BuscarDado(){
        try{
            setCarregando(true)
            const tabela = await axios(baseUrl).then(resp => {
                let dado = resp.data
                
    
                let tecnico = filtro.tecnico !== "Todos" ? dado.filter((registro: any) => registro.Tecnico === filtro.tecnico) : dado
                let ano = filtro.ano !== "Todos" ? tecnico.filter((registro: any) => registro.Ano === +filtro.ano) : tecnico
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
    
                return mes
            })
    
            return setBanco(tabela)
        }catch(e){
            console.log(e)
        }finally{
            setCarregando(false)
        }
    }
    
    return(
        <Layout icone={<IconGerencia fontSize='large'/>} texto="Gerência">
             <div className='flex flex-col max-sm:grid'>
                <div className='h-24 mt-2 mx-3'>
                    <NavigatePage
                        titulo="Tabela Geral"
                        iconeTitulo={<IconTabela sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={GenUrl} dataMini={GenUrl}
                    />
                </div>
                <div className='max-sm:grid max-sm:grid-cols-1'>
                    <FiltroGnc modo='gerencia' semDia filtro={filtro} alterarCampo={AlterarCampo} buscar={BuscarDado}/>
                </div>
                <div className=''>
                    {carregando ? <div className="mt-44"><Carregando cor="success" tamanho={300} grafico/></div> : 
                        <TabelaGen dados={banco}/>
                    }
                </div>
            </div>
        </Layout>
    )
}