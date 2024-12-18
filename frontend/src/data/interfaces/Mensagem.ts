export interface Mensagem {
    severity: "success" | "error" | "warning"
    variant: "filled" | "outlined" | "standard"
    memsagem: string
}

export const initialMSG = {
    severity: "",
    variant: "",
    mensagem: ""
}