export interface GraficoLab {
    totalOS: number
    totalServico: number
    servico: Array<ArrayGrafico>
    equipamento: Array<ArrayGrafico>
    serieServico?: Array<ArrayGrafico>
}

interface ArrayGrafico {
    name?: string
    y?: any
    drilldown?: string
}

export const initialGraficoLab: GraficoLab = {
    totalOS: 0,
    totalServico: 0,
    servico: [{name:"Servico", y: 0}],
    equipamento: [{name: "Equipamento", y: 0}]
}