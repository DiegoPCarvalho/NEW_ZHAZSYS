export interface Atividade {
    id?: number
    Data: string
    Dia: string
    Mes: string
    Ano: string
    OS: string
    Cliente: string
    Equipamento: string
    Modelo: string
    NS: string
    Servico: string
    Placa: string
    Contrato: string
    Observacao: string
    Estagio: string
    ProblemObs?: string
    DataInicialBruto?: string
    DataFinalBruto?: string
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
