export interface Mensagem {
    severity: "success" | "error" | "warning"
    variant: "filled" | "outlined" | "standard"
    mensagem: string
}

export const initialMSG: Mensagem = {
    severity: "success",
    variant: "standard",
    mensagem: ""
}