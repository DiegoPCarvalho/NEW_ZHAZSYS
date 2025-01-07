export interface Vhl {
    id?: number
    Data: any
    Dia: number
    Mes: number
    Ano: number
    Pedido: string
    Cliente: string
    Servico: string
    Observacao: string
    QTDE: number
    Tecnico: string
    Equipamento: any[]
}

export const initialVhl: Vhl = {
    Data: "",
    Dia: 0,
    Mes: 0,
    Ano: 0,
    Pedido: "",
    Cliente: "",
    Servico: "",
    Observacao: "",
    QTDE: 0,
    Tecnico: "",
    Equipamento: []
}

export interface VhlEquip {
    id: string
    Equipamento: string
    Modelo: string
    NS: string
    Observacao: string
}

export const initialVhlEquip: VhlEquip = {
    id: "",
    Equipamento: "",
    Modelo: "",
    NS: "",
    Observacao: ""
}