"use client"
import { IconQrcode, IconRelatorio } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { LabUrl } from '@/data/config/labUrl';
import FiltroGnc from '@/components/shared/FiltroGnc';
import CardsLab from './CardsLab';
import GraficosLab from './GraficosLab';
import { useEffect, useState } from 'react';
import { FiltroGncProps, initialFiltroGnc } from '@/data/interfaces/FiltroGncProps';
import axios from 'axios';
import Banco from '@/data/database/banco';
import { ArrayParaObjeto } from '@/data/functions/ArrayParaObjeto';
import Carregando from '@/components/shared/Carregando';
import { initialGraficoLab, GraficoLab } from '@/data/interfaces/GraficoLab';
import { Drill } from '@/data/functions/Drill';
import { Series } from '@/data/functions/Series';
import useAppData from '@/data/hook/useAppData';

export default function RelatorioLabo() {

    const { userMain } = useAppData()
    const [filtro, setFiltro] = useState<FiltroGncProps>(initialFiltroGnc)
    const [carregando, setCarregando] = useState<boolean>(false)
    const [dados, setDados] = useState<GraficoLab>(initialGraficoLab)
    const baseUrl = Banco("Geral")

    useEffect(() => {
        BuscarDados()
    }, [])


    function AlterarCampo(event: any) {
        const Filtro: any = { ...filtro }
        Filtro[event.target.name] = event.target.value
        setFiltro(Filtro)
    }

    async function BuscarDados(){
        try{
            setCarregando(true)
            const tabela = await axios(baseUrl).then(resp => {
                let dado = resp.data
    
                let tecnico = dado.filter((registro: any) => registro.Tecnico === userMain!.nomeCompleto)
                let ano = filtro.ano !== "Todos" ? tecnico.filter((registro: any) => registro.Ano === +filtro.ano) : tecnico
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
                let dia = filtro.dia !== "Todos" ? mes.filter((registro: any) => registro.Dia === +filtro.dia) : mes
                
                return dia
            })
            
            let dadoOS: any = []
            let servicoInicial: any = []
            let equipamentoInicial: any = []
            let serieServico: any = []

            tabela.map((registro: any) => {
                dadoOS.push(registro.OS)
                servicoInicial.push(registro.Servico)
                equipamentoInicial.push(registro.Equipamento)
                
            })

            const totalOS = [...new Set(dadoOS)]
            const servicoFinal = Drill(servicoInicial)
            const equipamentoFinal = ArrayParaObjeto(equipamentoInicial)

            servicoFinal.map((registro: any) => {
                Series(tabela, registro, serieServico, false)
            })

        
        const resultadoFinal: GraficoLab = {
            totalOS: totalOS.length,
            totalServico: tabela.length,
            servico: servicoFinal,
            equipamento: equipamentoFinal,
            serieServico: serieServico
        }
        

        return setDados(resultadoFinal)
        
        }catch(e){
            console.log(e)
        }finally{
            setCarregando(false)
        }
    }

    return (
        <Layout icone={<IconQrcode fontSize='large' />} texto="Laboratório">
            <div className='flex flex-col h-full'>
                <div className='h-16 mt-3 mx-3'>
                    <NavigatePage
                        titulo="Relatório"
                        iconeTitulo={<IconRelatorio sx={{ fontSize: 40 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={LabUrl} dataMini={LabUrl}
                    />
                </div>
                <div className='mt-5'>
                    <FiltroGnc filtro={filtro} alterarCampo={AlterarCampo} buscar={BuscarDados}/>
                </div>
                <div className="flex justify-between mt-5 max-sm:grid max-sm:grid-cols-1">
                    {carregando ?
                        <div className=" mt-44 flex justify-center items-center w-full">
                            <Carregando cor="success" tamanho={300} grafico/>
                        </div> :
                        <><div className='max-sm:w-[100%]'>
                            <CardsLab 
                                OS={dados.totalOS}
                                Servico={dados.totalServico}
                            />
                        </div>
                            <div className='grow ml-10 max -sm:ml-0 h-[100%] max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]'>
                                <GraficosLab 
                                    dadoServico={dados.servico}
                                    dadoEquipamento={dados.equipamento}
                                    dadoSerieServico={dados?.serieServico}
                                />
                            </div></>
                    }
                </div>
            </div>
        </Layout>
    )
}