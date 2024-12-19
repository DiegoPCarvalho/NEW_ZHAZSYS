export interface Usuario {
    id?: number
    nomeCompleto: string
    email: string
    departamento: string
    senha: string
    contrato: string
    especialidade: string
    acesso: string
    fotoUrl: string
}

export const initialUser = {
    nomeCompleto: "",
    email: "",
    departamento: "",
    senha: "",
    contrato: "",
    especialidade: "",
    acesso: "",
    fotoUrl: ""
}