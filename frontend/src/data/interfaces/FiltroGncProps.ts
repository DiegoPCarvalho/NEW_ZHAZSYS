export interface FiltroGncProps {
    contrato: string
    tecnico: string
    dia: string
    mes: string
    ano: string
}

export const initialFiltroGnc = {
    contrato: "Todos",
    tecnico: "Todos",
    dia: "Todos",
    mes: "Todos",
    ano: "Todos"
}