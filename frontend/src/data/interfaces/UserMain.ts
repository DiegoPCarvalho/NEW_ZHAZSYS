export interface UserMain {
    nomeCompleto: string
    email: string
    departamento: string
    senha?: string
    contratoPrincipal: string
    contratoSecundario: string
    especialidadePrincipal: string
    especialidadeSecundaria: string
    especialidadeTerciaria: string
    acesso: string
    fotoUrl: string
}

export const initialUserMain: UserMain = {
    nomeCompleto: "",
    email: "",
    departamento: "",
    contratoPrincipal: "",
    contratoSecundario: "",
    especialidadePrincipal: "",
    especialidadeSecundaria: "",
    especialidadeTerciaria: "",
    acesso: "",
    fotoUrl: ""
}


