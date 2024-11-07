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
    alterouCampo?: (novoValor: any) => void
}