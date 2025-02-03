export interface Atividade {
    id?: number
    Data: any
    Dia: any
    Mes: any
    Ano: any
    OS: string
    Cliente: string
    Equipamento: any
    Modelo: string
    NS: string
    Servico: string
    Placa?: string
    Contrato: string
    Observacao: string
    Estagio: string
    ProblemObs?: string
    Problema?: string
    DataInicialBruto?: string
    DataFinalBruto?: any
    TempoLiquido?: string
    DataInicialProblema?: string
    DataFinalProblema?: string
    ContProblema?: number
    importante?: boolean
    Tecnico: string
}

export const initialAtividade: Atividade = {
    Data: '',
    Dia: '',
    Mes: '',
    Ano: '',
    OS: '',
    Cliente: '',
    Equipamento: '',
    Modelo: '',
    NS: '',
    Servico: '',
    Placa: '',
    Contrato: '',
    Observacao: '',
    Estagio: '',
    Tecnico: ''
}
