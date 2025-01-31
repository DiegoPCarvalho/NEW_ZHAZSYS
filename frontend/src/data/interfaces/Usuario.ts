export interface Usuario {
    id?: number
    nomeCompleto: string
    email: string
    departamento: string
    senha: string
    contratoPrincipal: string
    contratoSecundario: string
    especialidadePrincipal: string
    especialidadeSecundaria: string
    especialidadeTerciaria: string
    acesso: string
    fotoUrl: string
}

export const initialUser: Usuario = {
    nomeCompleto: "",
    email: "",
    departamento: "",
    senha: "",
    contratoPrincipal: "",
    contratoSecundario: "",
    especialidadePrincipal: "",
    especialidadeSecundaria: "",
    especialidadeTerciaria: "",
    acesso: "",
    fotoUrl: ""
}