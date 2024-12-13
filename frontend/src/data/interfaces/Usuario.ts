export interface Usuario {
    NomeCompleto: string
    Email: string
    Departamento: string
    Senha: string
    Contrato: string
    Especialidade: string
    Acesso: string
    FotoUrl: string
}

export const initialUser = {
    NomeCompleto: "",
    Email: "",
    Departamento: "",
    Senha: "",
    Contrato: "",
    Especialidade: "",
    Acesso: "",
    FotoUrl: ""
}