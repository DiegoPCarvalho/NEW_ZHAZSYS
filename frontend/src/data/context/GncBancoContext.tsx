import { createContext, useState } from "react";
import Banco from "../database/banco";
import axios from "axios";

interface GncBancoContextProps {
    data?: any[]
    contratos?: any[]
    equipamentos?: any[]
    departamentos?: any[]
    servicoVhl?: any[]
    servicoLab?: any[]
    novaData?: (novo: any[]) => void
    buscarDados?: () => Promise<void>
    buscarContrato?: () => Promise<void>
    buscarVhl?: () => Promise<void>
    buscarDadosLab?: () => Promise<void>
}

const GncBancoContext = createContext<GncBancoContextProps>({});

export function GncProvider({ children } : any){
    const [data, setData] = useState<any[]>([])
    const [contratos, setContratos] = useState<any[]>([])
    const [equipamentos, setEquipamentos] = useState<any[]>([])
    const [departamentos, setDepartamentos] = useState<any[]>([])
    const [servicoVhl, setServicoVhl] = useState<any[]>([])
    const [servicoLab, setServicoLab] = useState<any[]>([])

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

    async function buscarVhl(){
        const equipamento = await axios(banco("Equipamento")).then(resp => resp.data)
        const servicoVhl = await axios(banco("Servico")).then(resp => {
            let dado = resp.data.filter((registro: any) => registro.tipo === "VHL")
            return dado
        })
        setEquipamentos(equipamento)
        setServicoVhl(servicoVhl)
    }

    async function buscarDadosLab(){
        const equipamento = await axios(banco("Equipamento")).then(resp => resp.data)
        const contrato = await axios(banco("Contrato")).then(resp => resp.data)
        const servicoLab = await axios(banco("Servico")).then(resp => {
            let dado = resp.data.filter((registro: any) => registro.tipo === "Laboratório")
            return dado
        })

        setContratos(contrato)
        setEquipamentos(equipamento)
        setServicoLab(servicoLab)
    }

    return (
        <GncBancoContext.Provider value={{
                data,
                contratos,
                equipamentos,
                departamentos,
                servicoVhl,
                servicoLab,
                novaData,
                buscarDados,
                buscarContrato,
                buscarVhl,
                buscarDadosLab
            }}>
            {children}
        </GncBancoContext.Provider>
    )
}

export default GncBancoContext