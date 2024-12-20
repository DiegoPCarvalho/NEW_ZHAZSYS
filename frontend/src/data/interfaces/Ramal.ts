export interface Ramal {
    id?: number
    departamento: string
    usuario: string
    numero: number
}

export const initialRamal : Ramal = {
    departamento: "",
    usuario: "",
    numero: 0
}