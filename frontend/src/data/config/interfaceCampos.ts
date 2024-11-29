export interface EntradaProps {
    id?: string
    tipo?: string
    texto?: string
    nome?: string
    valor?: any
    leitura?: boolean
    className?: string
    requerido?: boolean
    mensagemCampo?: string
    soLeitura?: boolean
    children?: any
    filtro?: boolean
    desativar?: boolean
    linhas?: number
    alterouCampo?: (novoValor: any) => void
    buscarPesquisa?: () => void
}