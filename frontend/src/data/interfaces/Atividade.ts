// import useAppData from "../hook/useAppData"

// const { userMain } = useAppData()

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
    Observacao: String
    ProblemObs: string
    Estagio: string
    DataInicialBruto: string
    DataFinalBruto: string
    TempoLiquido: string
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
    ProblemObs: '',
    Estagio: '',
    DataInicialBruto: '',
    DataFinalBruto: '',
    TempoLiquido: '',
    Tecnico: ""
}
