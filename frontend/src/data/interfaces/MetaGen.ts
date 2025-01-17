export interface Meta {
    id?: number
    metaOS: number
    metaServico: number
    mes: string
    ano: string 
}

export const initialMeta : Meta = {
    metaOS: 0,
    metaServico: 0,
    mes: "",
    ano: ""
}