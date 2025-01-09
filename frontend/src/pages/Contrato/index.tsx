"use client"
import { IconContrato } from '@/components/icons/IconesMaterial';
import Layout from './../../components/template/Layout';
import FileiraCards from './FileiraCards';
import Graficos from './Graficos';
import FiltroGnc from '@/components/shared/FiltroGnc';
import useGncData from '@/data/hook/useGncData';
import { useEffect, useState } from 'react';
import { FiltroGncProps, initialFiltroGnc } from '@/data/interfaces/FiltroGncProps';
import axios from 'axios';
import Banco from '@/data/database/banco';
import { ArrayParaObjeto } from '@/data/functions/ArrayParaObjeto';
import Carregando from '@/components/shared/Carregando';

export default function Contrato() {
    const { buscarContrato } = useGncData()
    const [filtro, setFiltro] = useState<FiltroGncProps>(initialFiltroGnc)
    const [totalOS, setTotalOS] = useState<number>(0)
    const [totalServico, setTotalServico] = useState<number>(0)
    const [limpeza, setLimpeza] = useState<number>(0)
    const [carregando, setCarregando] = useState<boolean>(false)
    const [graficoServico, setGraficoServico] = useState<any[]>([{ name: "servico", y: 0 }])
    const [graficoEquipamento, setGraficoEquipamento] = useState<any[]>([{ name: "Equipamento", y: 0 }])
    const baseUrl = Banco("Geral")

    useEffect(() => {
        buscarContrato!()
    }, [])

    function alterarCampo(event: any) {
        const Filtro: any = { ...filtro }
        Filtro[event.target.name] = event.target.value
        setFiltro(Filtro)
    }

    function filtrarDados() {
        if (filtro.contrato !== "Todos") {
            buscarDados()
        } else {
            console.log("Alterer os valores do filtro para pesquisar")
        }
    }

    async function buscarDados() {
        try {
            setCarregando(true)
            let dadoOS: any = []
            let servico: any = []
            let equipamento: any = []

            const GeralContrato = await axios(baseUrl).then(resp => {
                let dado = resp.data

                let contrato = dado.filter((registro: any) => registro.Contrato === filtro.contrato)
                let ano = filtro.ano !== "Todos" ? contrato.filter((registro: any) => registro.Ano === +filtro.ano) : contrato
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
                let dia = filtro.dia !== "Todos" ? mes.filter((registro: any) => registro.Dia === +filtro.dia) : mes

                return dia
            })

            GeralContrato.map((registro: any) => {
                dadoOS.push(registro.OS)
                if (registro.Servico !== undefined) {
                    servico.push(registro.Servico)
                }
                if (registro.Equipamento !== undefined) {
                    equipamento.push(registro.Equipamento)
                }
            })

            let totalServico = GeralContrato.filter((registro: any) => registro.Servico !== "Limpeza")
            let totalOS = [...new Set(dadoOS)]
            let totalLimpeza = GeralContrato.filter((registro: any) => registro.Servico === "Limpeza")


            let servicoFinal = ArrayParaObjeto(servico)
            let equipFinal = ArrayParaObjeto(equipamento)

            setTotalOS(totalOS.length)
            setTotalServico(totalServico.length)
            setLimpeza(totalLimpeza.length)
            setGraficoServico(servicoFinal)
            setGraficoEquipamento(equipFinal)

        } catch (e) {
            console.log(e)
        } finally {
            setCarregando(false)
        }
    }

    return (
        <Layout icone={<IconContrato fontSize='large' />} texto="Contrato">
            <div className="flex flex-col dark:text-white max-sm:grid max-sm:grid-cols-1 h-full w-full">
                <div className="max-sm:h-[30%] flex justify-center mt-3 max-sm:mt-3">
                    <FiltroGnc modo="contrato" filtro={filtro} alterarCampo={alterarCampo} buscar={filtrarDados} />
                </div>
                <div className='flex mt-7 h-[86%] max-sm:grid max-sm:grid-cols-1 justify-between'>
                    {carregando ?
                        <div className="flex justify-center items-center w-full">
                            <Carregando cor="success" tamanho={300}/>
                        </div> :
                        <><div className='max-sm:w-[100%]'>
                            <FileiraCards OS={totalOS} Servico={totalServico} Limpeza={limpeza} />
                        </div>
                            <div className='grow ml-10 max-sm:ml-0 h-[100%] max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]'>
                                <Graficos dadoServico={graficoServico} dadoEquipamento={graficoEquipamento} />
                            </div></>
                    }
                </div>
            </div>
        </Layout>
    )
}