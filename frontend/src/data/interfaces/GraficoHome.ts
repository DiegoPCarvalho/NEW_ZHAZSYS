import { ArrayGrafico } from "./ArrayGrafico"

export interface GraficoHomeProps {
    avulso: number
    contratos: number
    servicos: number
    vhl: number
    graficoProdDiaria: Array<ArrayGrafico>
    graficoServico: Array<ArrayGrafico>
    serieServico?: Array<ArrayGrafico>
    graficoAnual: Array<ArrayGrafico>
    graficoEquipamento: Array<ArrayGrafico>
}

export const initialGraficoHome : GraficoHomeProps = {
    avulso: 0,
    contratos: 0,
    servicos: 0,
    vhl: 0,
    graficoProdDiaria: [{name: "Produção", y: 0}],
    graficoServico: [{name: "Servico", y: 0}],
    graficoAnual: [{name: "Anual", y: 0}],
    graficoEquipamento: [{name: "Equipamento", y: 0}]
 }