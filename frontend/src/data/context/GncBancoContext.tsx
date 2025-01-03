import { createContext, useState } from "react";
import Banco from "../database/banco";
import axios from "axios";

interface GncBancoContextProps {
    data?: any[]
    contratos?: any[]
    equipamentos?: any[]
    departamentos?: any[]
    novaData?: (novo: any[]) => void
    buscarDados?: () => Promise<void>
    buscarContrato?: () => Promise<void>
}

const GncBancoContext = createContext<GncBancoContextProps>({});

export function GncProvider({ children } : any){
    const [data, setData] = useState<any[]>([])
    const [contratos, setContratos] = useState<any[]>([])
    const [equipamentos, setEquipamentos] = useState<any[]>([])
    const [departamentos, setDepartamentos] = useState<any[]>([])

    function novaData(novo: any){
        setData(novo)
    }

    async function buscarDados(){
        const equipamento = await axios(banco("Equipamento")).then(resp => resp.data)
        const contrato = await axios(banco("Contrato")).then(resp => resp.data)
        const departamento = await axios(banco("Departamento")).then(resp => resp.data)

        setContratos(contrato)
        setEquipamentos(equipamento)
        setDepartamentos(departamento)
    }

    function banco(nome: string){
        const baseUrl = Banco(nome)
        return baseUrl
    }
    
    
    async function buscarContrato(){
        const contrato = await axios(banco("Contrato")).then(resp => resp.data)
        setContratos(contrato)
    }

    return (
        <GncBancoContext.Provider value={{
                data,
                contratos,
                equipamentos,
                departamentos,
                novaData,
                buscarDados,
                buscarContrato
            }}>
            {children}
        </GncBancoContext.Provider>
    )
}

export default GncBancoContext