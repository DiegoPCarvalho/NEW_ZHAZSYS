import { createContext, useState } from "react";
import { Vhl, initialVhl, VhlEquip, initialVhlEquip } from "../interfaces/Vhl";

interface VhlContextProps {
    vhlForm?: Vhl
    vhlEquip?: VhlEquip
    equipLista?: any[]
    alterarCampoVhlForm?:(novoValor: any) => void
    alterarCampoVhlEquip?:(novoValor: any) => void
}

const VhlContext = createContext<VhlContextProps>({})

export function VhlProvider({children} : any){
    const [vhlForm, setVhlForm] = useState<Vhl>(initialVhl)
    const [vhlEquip, setVhlEquip] = useState<VhlEquip>(initialVhlEquip)
    const [equipLista, setEquipLitsa] = useState<any[]>([])

    function alterarCampoVhlForm(event: any){
        const Vhl: any = {...vhlForm}
        Vhl[event.target.name] = event.target.value
        setVhlForm(Vhl)
    }

    function alterarCampoVhlEquip(event: any){
        const VhlE: any = { ...vhlEquip }
        VhlE[event.target.name] = event.target.value
        setVhlEquip(VhlE)
    }

    return (
        <VhlContext.Provider
            value={{
                vhlForm,
                vhlEquip,
                equipLista,
                alterarCampoVhlForm,
                alterarCampoVhlEquip
            }}
        >
            {children}
        </VhlContext.Provider>
    )
}

export default VhlContext;