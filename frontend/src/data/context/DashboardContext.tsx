import { createContext, useState, useEffect } from "react";
import { GraficoGen, initialGraficoGen } from "../interfaces/GraficoGen";
import { FiltroGncProps, initialFiltroGnc } from "../interfaces/FiltroGncProps";
import axios from "axios";
import Banco from "../database/banco";
import { retornodads, somarTempos } from "../functions/SomarTempos";
import { Tempo } from "../functions/Tempo";
import { ArrayParaObjeto } from "../functions/ArrayParaObjeto";
import { Drill } from "../functions/Drill";
import { Series } from '@/data/functions/Series';

interface DashContextProps {
    graficoGen?: GraficoGen
    carregando?: boolean
    buscarDado?: (filtro: any) => Promise<void>
}

const DashContext = createContext<DashContextProps>({});

export function DashProvider({ children }: any) {

    const [graficoGen, setGraficoGen] = useState<GraficoGen>(initialGraficoGen)
    const [carregando, setCarregando] = useState<boolean>(false)
    const filtroInicial: FiltroGncProps = {
        contrato: "Todos",
        tecnico: "Todos",
        ano: "Todos",
        mes: "Todos",
        dia: "Todos"
    }

    useEffect(() => {
        buscarDado(filtroInicial)
    }, [])


    async function buscarDado(filtro: any) {
        try {
            setCarregando(true)

            const geral = await axios(Banco("Geral")).then(resp => {

                let tecnico = filtro.tecnico !== "Todos" ? resp.data.filter((registro: any) => registro.Tecnico === filtro.tecnico) : resp.data
                let ano = filtro.ano !== "Todos" ? tecnico.filter((registro: any) => registro.Ano === +filtro.ano) : tecnico
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
                let dia = filtro.dia !== "Todos" ? mes.filter((registro: any) => registro.Dia === +filtro.dia) : mes

                
                return dia
            })

            const vhl = await axios(Banco("VHL")).then(resp => {
                let data = resp.data

                let tecnico = filtro.tecnico !== "Todos" ? data.filter((registro: any) => registro.Tecnico === filtro.tecnico) : data
                let ano = filtro.ano !== "Todos" ? tecnico.filter((registro: any) => registro.Ano === +filtro.ano) : tecnico
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.Mes === +filtro.mes) : ano
                let dia = filtro.dia !== "Todos" ? mes.filter((registro: any) => registro.Dia === +filtro.dia) : mes

                return dia
            })

            const meta = await axios(Banco("Meta")).then(resp => {
                let data = resp.data

                let ano = filtro.ano !== "Todos" ? data.filter((registro: any) => registro.ano === filtro.ano) : []
                let mes = filtro.mes !== "Todos" ? ano.filter((registro: any) => registro.mes === filtro.mes) : ano

                return mes
            })

            //#region GERAL
            let dadoOS: any = []
            let totalServido: any = []
            let totalLimpeza: any = []
            let tempo: any = []
            let prodDiaInicial: any = []
            let JanOS: any = []
            let FevOS: any = []
            let MarOS: any = []
            let AbrOS: any = []
            let MaiOS: any = []
            let JunOS: any = []
            let JulOS: any = []
            let AgoOS: any = []
            let SetOS: any = []
            let OutOS: any = []
            let NovOS: any = []
            let DezOS: any = []
            let tecnicoInicial: any = []
            let equipInicial: any = []
            let servicoInicial: any = []
            let avulso: any = []
            let contrato: any = []
            let placas: any = []

            geral.map((registro: any) => {
                tempo.push(retornodads(Tempo(registro.DataInicialBruto, registro.DataFinalBruto)))
                if (registro.OS !== undefined) {
                    dadoOS.push(registro.OS)
                }
                if (registro.Dia !== undefined && registro.Dia !== "" && registro.Dia !== null) {
                    prodDiaInicial.push(registro.Dia)
                }
                if (registro.Mes !== undefined && registro.Mes !== "" && registro.Mes !== null) {
                    if (registro.Mes === 1) {
                        JanOS.push(registro.OS)
                    }
                    if (registro.Mes === 2) {
                        FevOS.push(registro.OS)
                    }
                    if (registro.Mes === 3) {
                        MarOS.push(registro.OS)
                    }
                    if (registro.Mes === 4) {
                        AbrOS.push(registro.OS)
                    }
                    if (registro.Mes === 5) {
                        MaiOS.push(registro.OS)
                    }
                    if (registro.Mes === 6) {
                        JunOS.push(registro.OS)
                    }
                    if (registro.Mes === 7) {
                        JulOS.push(registro.OS)
                    }
                    if (registro.Mes === 8) {
                        AgoOS.push(registro.OS)
                    }
                    if (registro.Mes === 9) {
                        SetOS.push(registro.OS)
                    }
                    if (registro.Mes === 10) {
                        OutOS.push(registro.OS)
                    }
                    if (registro.Mes === 11) {
                        NovOS.push(registro.OS)
                    }
                    if (registro.Mes === 12) {
                        DezOS.push(registro.OS)
                    }
                }
                if (registro.Servico !== "Limpeza") {
                    totalServido.push(registro.OS)
                }
                if (registro.Servico === "Limpeza") {
                    totalLimpeza.push(registro.OS)
                }
                if (registro.Tecnico !== undefined) {
                    tecnicoInicial.push(registro.Tecnico)
                }
                if (registro.Equipamento !== undefined) {
                    equipInicial.push(registro.Equipamento)
                }
                if (registro.Servico !== undefined) {
                    servicoInicial.push(registro.Servico)
                }
                if (registro.Contrato !== undefined) {
                    if (registro.Contrato === "Avulso") {
                        avulso.push(registro.OS)
                    }
                    if (registro.Contrato !== "Avulso") {
                        contrato.push(registro.Contrato)
                    }
                }
                if (registro.Placa === "Recuperada" || registro.Placa === "Não Recuperada") {
                    placas.push(registro.Placa)
                }
            })

            //OS sem repeticao
            const totalOS = [...new Set(dadoOS)]

            //tempo calculo
            let finalTempo: string = "00:00:00"
            tempo.map((registro: any) => {
                let result = somarTempos(finalTempo, registro)
                finalTempo = result
            })

            //producao Diaria
            const prodDiariaFinal = ArrayParaObjeto(prodDiaInicial)

            //projeção aunal
            const projecaoAnualFinalOS: any = [
                { name: "Janeiro", y: JanOS.length },
                { name: "Fevereiro", y: FevOS.length },
                { name: "Março", y: MarOS.length },
                { name: "Abril", y: AbrOS.length },
                { name: "Maio", y: MaiOS.length },
                { name: "Junho", y: JunOS.length },
                { name: "Julho", y: JulOS.length },
                { name: "Agosto", y: AgoOS.length },
                { name: "Setembro", y: SetOS.length },
                { name: "Outubro", y: OutOS.length },
                { name: "Novembro", y: NovOS.length },
                { name: "Dezembro", y: DezOS.length },
            ]

            //produtividade tecnico
            const tecnicoProdFinal = ArrayParaObjeto(tecnicoInicial)

            //Equipamento
            const equipFinal = ArrayParaObjeto(equipInicial)

            //Servico + serie
            const servicoFinal = Drill(servicoInicial)
            let serieServicoLab: any = []

            servicoFinal.map((registro: any) => {
                Series(geral, registro, serieServicoLab, true)
            })

            //Avulso X Contrato
            const contratoAvulsoFinal = [
                { name: "Avulso", y: avulso.length },
                { name: "Contratos", y: contrato.length, drilldown: "Contrato" }
            ]

            let serieContrato = [{
                name: "Contrato",
                id: "Contrato",
                data: ArrayParaObjeto(contrato)
            }]

            //placas
            const placasFinal = ArrayParaObjeto(placas)


            //#endregion

            //#region VHL
            let dadoVhl: any = []
            let servicoVhl: any = []
            let equipamentoVhl: any = []
            let tecnicoVhl: any = []
            let JanVhl: any = []
            let FevVhl: any = []
            let MarVhl: any = []
            let AbrVhl: any = []
            let MaiVhl: any = []
            let JunVhl: any = []
            let JulVhl: any = []
            let AgoVhl: any = []
            let SetVhl: any = []
            let OutVhl: any = []
            let NovVhl: any = []
            let DezVhl: any = []

            vhl.map((registro: any) => {
                tecnicoVhl.push(registro.Tecnico)
                dadoVhl.push(registro.Pedido)
                if (registro.Servico !== "") {
                    servicoVhl.push(registro.Servico)
                }
                registro.Equipamento.map((reg: any) => {
                    if (reg.Equipamento !== undefined && reg.Equipamento !== "") {
                        equipamentoVhl.push(reg.Equipamento)
                    }
                })
                if (registro.Mes !== undefined && registro.Mes !== "" && registro.Mes !== null) {
                    if (registro.Mes === 1) {
                        JanVhl.push(registro.Vhl)
                    }
                    if (registro.Mes === 2) {
                        FevVhl.push(registro.Vhl)
                    }
                    if (registro.Mes === 3) {
                        MarVhl.push(registro.Vhl)
                    }
                    if (registro.Mes === 4) {
                        AbrVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 5) {
                        MaiVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 6) {
                        JunVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 7) {
                        JulVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 8) {
                        AgoVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 9) {
                        SetVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 10) {
                        OutVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 11) {
                        NovVhl.push(registro.Pedido)
                    }
                    if (registro.Mes === 12) {
                        DezVhl.push(registro.Pedido)
                    }
                }
            })

            const totalVhl = [...new Set(dadoVhl)]
            const servicoFinalVhl = ArrayParaObjeto(servicoVhl)
            const equipamentoVhlFinal = ArrayParaObjeto(equipamentoVhl)
            const tecnicoVhlFinal = ArrayParaObjeto(tecnicoVhl)

            const projecaoAnualFinalVhl: any = [
                { name: "Janeiro", y: JanVhl.length },
                { name: "Fevereiro", y: FevVhl.length },
                { name: "Março", y: MarVhl.length },
                { name: "Abril", y: AbrVhl.length },
                { name: "Maio", y: MaiVhl.length },
                { name: "Junho", y: JunVhl.length },
                { name: "Julho", y: JulVhl.length },
                { name: "Agosto", y: AgoVhl.length },
                { name: "Setembro", y: SetVhl.length },
                { name: "Outubro", y: OutVhl.length },
                { name: "Novembro", y: NovVhl.length },
                { name: "Dezembro", y: DezVhl.length },
            ]

            //#endregion

            //#region meta
            let metaOS: any = []
            let metaServico: any = []

            if (meta.length > 0) {

                meta.map((registro: any) => {
                    metaOS.push(+registro.metaOS)
                    metaServico.push(+registro.metaServico)
                })

            }

            let metaOsFinal = metaOS.length === 0 ? 0 : metaOS.reduce((acum: number, ele: number) => acum + ele)
            let metaServicoFinal = metaServico.length === 0 ? 0 : metaServico.reduce((acum: number, ele: number) => acum + ele)

            //#endregion

            const graficoGenFinal = {
                totalOS: totalOS.length,
                totalServico: totalServido.length + totalVhl.length,
                totalVhl: totalVhl.length,
                totalTempo: finalTempo,
                totalPlaca: placas.length,
                totalLimpeza: totalLimpeza.length,
                metaOS: metaOsFinal,
                metaServico: metaServicoFinal,
                servicoLab: servicoFinal,
                serieServicoLab: serieServicoLab,
                servicoVhl: servicoFinalVhl,
                equipamentoLab: equipFinal,
                equipamentoVhl: equipamentoVhlFinal,
                prodTecLab: tecnicoProdFinal,
                prodTecVhl: tecnicoVhlFinal,
                anualLab: projecaoAnualFinalOS,
                anualVhl: projecaoAnualFinalVhl,
                contratoAvulso: contratoAvulsoFinal,
                serieContrato: serieContrato,
                placa: placasFinal,
                proDiaria: prodDiariaFinal
            }

            setGraficoGen(graficoGenFinal)
        } catch (e) {
            console.log(e)
        } finally {
            setCarregando(false)
        }
    }

    return (
        <DashContext.Provider value={{
            graficoGen,
            carregando,
            buscarDado
        }}>
            {children}
        </DashContext.Provider>
    )
}

export default DashContext;