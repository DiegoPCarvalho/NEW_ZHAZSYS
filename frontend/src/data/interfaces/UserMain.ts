export interface UserMain {
    nomeCompleto: string
    email: string
    departamento: string
    senha?: string
    contrato: string
    especialidade: string
    acesso: string
    fotoUrl: string
}

export const initialUserMain: UserMain = {
    nomeCompleto: "",
    email: "",
    departamento: "",
    contrato: "",
    especialidade: "",
    acesso: "",
    fotoUrl: ""
}


