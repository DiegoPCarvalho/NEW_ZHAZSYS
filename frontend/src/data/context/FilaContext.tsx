import { createContext, useState } from "react";
import { initialLoadOS, LoadOS } from "../interfaces/FilaGen";
import axios from "axios";
import Banco from "../database/banco";
import { dataNova } from "../functions/DataNova";
import useAppData from "../hook/useAppData";
import { BancoApiLocal } from "../database/bancoApiLocal";

interface FilaContextProps {
    tela?: string
    setTela?: (novoValor: string) => void
    openMS?: boolean
    setOpenMS?: (novoValor: boolean) => void
    dadoOSFila?: LoadOS
    buscarOSFila?:(OS: string) => void
    carregarLoadOS?: boolean
    carregarFilaGen?: Boolean
    carregarFilaUser?: Boolean
    filaEnviada?: Array<any>
    filaIniciada?: Array<any>
    filaFinalizada?: Array<any>
    buscarFilaGen?: (Tecnico: string) => Promise<void>
    buscarFilaUser?: () => Promise<void>
}

const FilaContext = createContext<FilaContextProps>({})

export function FilaProvider({children} : any){
    const { userMain } = useAppData()
    const [tela, setTela] = useState<string>("AddFila")
    const [openMS, setOpenMS] = useState<boolean>(false)
    const [dadoOSFila, setDadoOSFila] = useState<LoadOS>(initialLoadOS)
    const [carregarLoadOS, setCarregarLoadOS] = useState<boolean>(false)
    const [carregarFilaGen, setCarregarFilaGen] = useState<boolean>(false)
    const [carregarFilaUser, setCarregarFilaUser] = useState<boolean>(false)
    const [filaEnviada, setFilaEnviada] = useState<any[]>([])
    const [filaIniciada, setFilaIniciada] = useState<any[]>([])
    const [filaFinalizada, setFilaFinalizada] = useState<any[]>([])

    async function buscarOSFila(OS: string){
        try{
            setCarregarLoadOS(true)

            const loadOS = await axios(Banco("FilaTecnica")).then(resp =>{
                let dado: any = []

                resp.data.map((registro: any) => {
                    if(registro.OS === +OS){
                        dado.push({
                            OS: registro.OS,
                            Data: dataNova(registro.Data),
                            Servico: registro.Servico,
                            Tecnico: registro.Tecnico
                        })
                    }
                })

                return dado
            })

            setDadoOSFila(loadOS[0])

        }catch(e){
            console.log(e)
        }finally{
            setCarregarLoadOS(false)
        }
    }

    async function buscarFilaGen(Tecnico: string){
        try{
            setCarregarFilaGen(true)
            
            const fila = await axios(Banco("FilaTecnica")).then(resp => resp.data)
            const final = await axios(Banco("Geral")).then(resp => {
                let data = new Date()

                let dado = resp.data.filter((registro: any) => registro.Estagio === "Finalizado" && registro.Dia === data.getDate() && registro.Mes === data.getMonth() + 1 && registro.Ano === data.getFullYear())

                return dado
            })

            const filaEnviada = fila.filter((registro: any) => registro.Estagio === "Enviado" && registro.Tecnico === Tecnico)
            const filaInicio = fila.filter((registro: any) => registro.Estagio === "Iniciado" && registro.Tecnico === Tecnico)
            const filaFinal = final.filter((registro: any) => registro.Tecnico === Tecnico)

            console.log(filaEnviada, filaInicio, filaFinal)
            
        }catch(e){
            
        }finally {
            setCarregarFilaGen(false)
        }
    }
    
    async function buscarFilaUser(){
        try{
            setCarregarFilaUser(true)
            
            const fila = await axios(Banco("FilaTecnica")).then(resp => {
                let dado = resp.data.filter((registro: any) => registro.Tecnico === userMain?.nomeCompleto)
                return dado
            })

            const filaFinal = await axios(Banco("Geral")).then(resp => {
                let data = new Date()

                let dado = resp.data.filter((registro: any) => registro.Estagio === "Finalizado" && registro.Dia === data.getDate() && registro.Mes === data.getMonth() + 1 && registro.Ano === data.getFullYear() && registro.Tecnico === userMain?.nomeCompleto)

                return dado
            })

            if(userMain?.contrato === "Avulso"){

                let filaEnviada = fila.filter((registro: any) => registro.Estagio === "Enviado")
                let filaIniciada = fila.filter((registro: any) => registro.Estagio === "Iniciado")

                setFilaEnviada(filaEnviada)
                setFilaIniciada(filaIniciada)

            }else if(userMain?.contrato === "Contrato Assaí"){
                
                let aprovado = await axios(BancoApiLocal("aprovado")).then(resp => {
                    let dado = resp.data.filter((registro: any) => registro.TipoOS === userMain?.contrato && registro.Equipamento.toLowerCase().match(userMain?.especialidade.toLowerCase()))
                    return dado
                })
    
                let aguardandoVistoria = await axios(BancoApiLocal("aguardandoVistoria")).then(resp => {
                    let dado = resp.data.filter((registro: any) => registro.TipoOS === userMain?.contrato && registro.Equipamento.toLowerCase().match(userMain?.especialidade.toLowerCase()))
                    return dado
                })

                let filaEnv = fila.filter((registro: any) => registro.Estagio === "Enviado")

                let filaApi = aguardandoVistoria.concat(aprovado)
    
                let filaEnviada: any = []
                
                filaApi.map((registro: any) => {
                    if(fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)){
    
                    }else {
                        filaEnviada.push({...registro})
                    }
                })
                
                let filaIni = fila.filter((registro: any) => registro.Estagio === "Iniciado")
    
                filaEnviada.concat(filaEnv)

                setFilaEnviada(filaEnviada)
                setFilaIniciada(filaIni)

            }else {
                
                let aprovado = await axios(BancoApiLocal("aprovado")).then(resp => {
                    let dado = resp.data.filter((registro: any) => registro.TipoOS === userMain?.contrato)
                    return dado
                })
    
                let aguardandoVistoria = await axios(BancoApiLocal("aguardandoVistoria")).then(resp => {
                    let dado = resp.data.filter((registro: any) => registro.TipoOS === userMain?.contrato)
                    return dado
                })

                let filaEnv = fila.filter((registro: any) => registro.Estagio === "Enviado")

                let filaApi = aguardandoVistoria.concat(aprovado)
    
                let filaEnviada: any = []
                
                filaApi.map((registro: any) => {
                    if(fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)){
    
                    }else {
                        filaEnviada.push({...registro})
                    }
                })
                
                let filaIni = fila.filter((registro: any) => registro.Estagio === "Iniciado")
    
                filaEnviada.concat(filaEnv)

                setFilaEnviada(filaEnviada)
                setFilaIniciada(filaIni)
            }
            
            setFilaFinalizada(filaFinal)

        }catch(e){
            
        }finally {
            setCarregarFilaUser(false)
        }
    }


    return (
        <FilaContext.Provider value={{
            tela,
            setTela,
            openMS,
            setOpenMS,
            dadoOSFila,
            buscarOSFila,
            carregarLoadOS,
            buscarFilaGen,
            carregarFilaGen,
            buscarFilaUser,
            carregarFilaUser,
            filaEnviada,
            filaIniciada,
            filaFinalizada
        }}>
            {children}
        </FilaContext.Provider>
    )
}

export default FilaContext;