import { ArrayGrafico } from "./ArrayGrafico"

export interface GraficoGen {
    totalOS: number
    totalServico: number
    totalVhl:number
    totalTempo: any
    totalPlaca: number
    totalLimpeza: number
    metaServico: number
    metaOS: number
    servicoLab: Array<ArrayGrafico>
    serieServicoLab?: Array<ArrayGrafico>
    servicoVhl: Array<ArrayGrafico>
    serieServicoVhl?: Array<ArrayGrafico>
    equipamentoLab: Array<ArrayGrafico>
    equipamentoVhl: Array<ArrayGrafico>
    prodTecLab: Array<ArrayGrafico>
    prodTecVhl: Array<ArrayGrafico>
    anualLab:Array<ArrayGrafico>
    anualVhl:Array<ArrayGrafico>
    contratoAvulso: Array<ArrayGrafico>
    serieContrato?: Array<ArrayGrafico>
    placa: Array<ArrayGrafico>
    proDiaria: Array<ArrayGrafico>
}

export const initialGraficoGen: GraficoGen = {
    totalOS: 0,
    totalServico: 0,
    totalVhl: 0,
    totalTempo: "00:00:00",
    totalPlaca: 0,
    totalLimpeza: 0,
    metaServico: 0,
    metaOS: 0,
    servicoLab: [{name:"Servico", y: 0}],
    servicoVhl: [{name:"Servico", y: 0}],
    equipamentoLab: [{name: "Equipamento", y: 0}],
    equipamentoVhl: [{name: "Equipamento", y: 0}],
    prodTecLab: [{name: "Técnico", y: 0}],
    prodTecVhl: [{name: "Técnico", y: 0}],
    anualLab: [{name: "Serviço", y: 0}],
    anualVhl: [{name: "Serviço", y: 0}],
    contratoAvulso: [{name: "Serviço", y: 0}],
    placa: [{name: "Placa", y: 0}],
    proDiaria: [{name: "Prod", y: 0}]
}