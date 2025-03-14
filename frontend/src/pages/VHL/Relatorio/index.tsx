"use client"
import { IconVHL, IconRelatorio } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { VhlUrl } from '@/data/config/vhlUrl';
import CardsVhl from './CardsVhl';
import GraficosVhl from './GraficosVhl';
import FiltroGnc from '@/components/shared/FiltroGnc';
import { useEffect, useState } from 'react';
import { initialFiltroGnc, FiltroGncProps } from '@/data/interfaces/FiltroGncProps';
import Banco from '@/data/database/banco';
import axios from 'axios';
import { ArrayParaObjeto } from '@/data/functions/ArrayParaObjeto';
import Carregando from '@/components/shared/Carregando';
import useAppData from '@/data/hook/useAppData';


export default function RelatorioVHL() {
    const { userMain } = useAppData()
    const [filtro, setFiltro] = useState<FiltroGncProps>(initialFiltroGnc)
    const [pedido, setPedido] = useState<number>(0)
    const [QTDE, setQTDE] = useState<number>(0)
    const [graficoServico, setGraficoServico] = useState<any[]>([{ name: "Serviço", y: 0 }])
    const [graficoEquip, setGraficoEquip] = useState<any[]>([{ name: "Equipamento", y: 0 }])
    const [carregando, setCarregando] = useState<boolean>(false)
    const baseUrl = Banco("VHL")

    useEffect(() => {
        buscarDado()
    }, [])

    function AlterarCampo(event: any) {
        const Filtro: any = { ...filtro }
        Filtro[event.target.name] = event.target.value
        setFiltro(Filtro)
    }

    async function buscarDado() {
        try{
            setCarregando(true)
            const tabela = await axios(baseUrl).then(resp => {
                let dado = resp.data
    
                let tecnico = dado.filter((registro: any) => registro.Tecnico === userMain!.nomeCompleto)
                const ano = filtro.ano !== "Todos" ? dado.filter((registro: any) => registro.Ano === +filtro.ano) : tecnico
                const mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
                const dia = filtro.dia !== "Todos" ? mes.filter((registro: any) => registro.Dia === +filtro.dia) : mes
    
                return dia
            })
    
            //quantidade de equipamentos
            let numeros: any = []
            let servico: any = []
            let equipamentoVhl: any = []
    
            tabela.map((registro: any) => {
                numeros.push(+registro.QTDE)
                if(registro.Servico !== ""){
                    servico.push(registro.Servico)
                }
                registro.Equipamento.map((reg: any) => {
                    if(reg.Equipamento !== undefined && reg.Equipamento !== ""){
                        equipamentoVhl.push(reg.Equipamento)
                    }
                })
            })
            let Qtde: number = numeros.reduce((acumulador: number, elemento: number) => acumulador + elemento)
    
            //servico
            let servicoFinal = ArrayParaObjeto(servico)
            let equipFinal = ArrayParaObjeto(equipamentoVhl)
    
            setGraficoServico(servicoFinal)
            setGraficoEquip(equipFinal)
            setQTDE(Qtde)
            setPedido(tabela.length)
        }catch(e) {

        }finally {
            setCarregando(false)
        }
    }

    return (
        <Layout icone={<IconVHL fontSize='large' />} texto="VHL">
            <div className='flex flex-col item-center h-full overflow-auto'>
                <div className='mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Relatório"
                        iconeTitulo={<IconRelatorio sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='mb-12 flex justify-center'>
                    <FiltroGnc filtro={filtro} buscar={buscarDado} alterarCampo={AlterarCampo} />
                </div>
                <div className="flex max-sm:justify-center max-sm:grid max-sm:grid-cols-1">
                    {carregando ? 
                        <div className="flex justify-center items-center w-full">
                            <Carregando cor="success" tamanho={300} grafico/>
                        </div>
                        :<>
                            <CardsVhl pedido={pedido} QTDE={QTDE}/>
                            <GraficosVhl  dadoServico={graficoServico} dadoEquipamento={graficoEquip}/>
                        </>
                    }
                </div>
            </div>
        </Layout>
    )
}