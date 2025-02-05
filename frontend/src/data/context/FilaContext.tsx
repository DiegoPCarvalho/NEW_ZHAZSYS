import { createContext, useState } from "react";
import { initialLoadOS, LoadOS } from "../interfaces/FilaGen";
import axios from "axios";
import Banco from "../database/banco";
import { dataNova } from "../functions/DataNova";
import useAppData from "../hook/useAppData";
import { BancoApiLocal } from "../database/bancoApiLocal";
import { diferenca } from "../functions/diferenca";
import { equipamento } from "../api/equipamento";
import { Atividade } from "../interfaces/Atividade";

interface FilaContextProps {
    tela?: string
    setTela?: (novoValor: string) => void
    openMS?: boolean
    setOpenMS?: (novoValor: boolean) => void
    dadoOSFila?: LoadOS
    bancoAdd?: Array<any>
    buscarOSFila?: (OS: string) => void
    carregarLoadOS?: boolean
    carregarFilaGen?: boolean
    carregarFilaUser?: boolean
    carregarFilaSend?: boolean
    carregarAdd?: boolean
    filaEnviada?: Array<any>
    filaIniciada?: Array<any>
    filaFinalizada?: Array<any>
    bancoDownload?: Array<any>
    obsProblema?: string
    openModalProblema?: boolean
    openModalDownload?: boolean
    setOpenModalDownload?: (novoValor: boolean) => void
    fecharModalProblema?: () => void
    setObsProblema?: (novoValor: string) => void
    buscarFilaGen?: (Tecnico: string) => Promise<void>
    buscarFilaUser?: () => Promise<void>
    buscarFilaAdd?: (estagio: string, contrato: string) => Promise<void>
    addFilaUser?: (tecnico: string) => Promise<void>
    removerFila?: (registro: any) => void
    startAtividade?: (fila: any) => void
    backAtividade?: (fila: any) => void
    problemAtividade?: (fila: any) => void
    finishAtividade?: (fila: any) => void
    buscarFilaDownload?: () => Promise<void>
    sendMyList?: (registro: any) => void
}

const FilaContext = createContext<FilaContextProps>({})

export function FilaProvider({ children }: any) {
    const { userMain } = useAppData()
    const [tela, setTela] = useState<string>("AddFila")
    const [openMS, setOpenMS] = useState<boolean>(false)
    const [dadoOSFila, setDadoOSFila] = useState<LoadOS>(initialLoadOS)
    const [carregarLoadOS, setCarregarLoadOS] = useState<boolean>(false)
    const [carregarFilaGen, setCarregarFilaGen] = useState<boolean>(false)
    const [carregarFilaUser, setCarregarFilaUser] = useState<boolean>(false)
    const [carregarFilaSend, setCarregarFilaSend] = useState<boolean>(false)
    const [carregarAdd, setCarregarAdd] = useState<boolean>(false)
    const [filaEnviada, setFilaEnviada] = useState<any[]>([])
    const [filaIniciada, setFilaIniciada] = useState<any[]>([])
    const [filaFinalizada, setFilaFinalizada] = useState<any[]>([])
    const [bancoAdd, setBancoAdd] = useState<any[]>([])
    const [obsProblema, setObsProblema] = useState<string>("")
    const [openModalProblema, setOpenModalProblema] = useState<boolean>(false)
    const [filaProblema, setFilaProblema] = useState<any>({})
    const [openModalDownload, setOpenModalDownload] = useState<boolean>(false)
    const [bancoDownload, setBancoDownload] = useState<any>([])

    async function buscarOSFila(OS: string) {
        try {
            setCarregarLoadOS(true)

            const loadOS = await axios(Banco("FilaTecnica")).then(resp => {
                let dado: any = []

                resp.data.map((registro: any) => {
                    if (registro.OS === +OS) {
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

        } catch (e) {
            console.log(e)
        } finally {
            setCarregarLoadOS(false)
        }
    }

    async function buscarFilaGen(Tecnico: string) {
        try {
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

        } catch (e) {

        } finally {
            setCarregarFilaGen(false)
        }
    }

    async function buscarFilaUser() {
        try {
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

            if (userMain?.contratoPrincipal === "Avulso") {

                let filaEnviada = fila.filter((registro: any) => registro.Estagio === "Enviado")
                let filaIniciada = fila.filter((registro: any) => registro.Estagio === "Iniciado")

                setFilaEnviada(filaEnviada)
                setFilaIniciada(filaIniciada)

            } else if (userMain?.contratoPrincipal === "Contrato Assaí") {

                let aprovado = await axios(BancoApiLocal("aprovado")).then(resp => {
                    let dadoApA: any = []

                    resp.data.map((registro: any) => {

                        if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                        } else {
                            if ((registro.TipoOS === userMain?.contratoPrincipal) && (registro.Equipamento.toLowerCase().match(userMain?.especialidadePrincipal.toLowerCase()))) {
                                dadoApA.push({ ...registro })
                            }
                        }
                    })

                    return dadoApA
                })

                let aguardandoVistoria = await axios(BancoApiLocal("aguardandoVistoria")).then(resp => {
                    let dadoAvA: any = []

                    resp.data.map((registro: any) => {

                        if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                        } else {
                            if (registro.TipoOS === userMain?.contratoPrincipal && registro.Equipamento.toLowerCase().match(userMain?.especialidadePrincipal.toLowerCase())) {
                                dadoAvA.push({ ...registro })
                            }
                        }
                    })

                    return dadoAvA
                })

                let filaEnv = fila.filter((registro: any) => registro.Estagio === "Enviado")

                let filaApi = aguardandoVistoria.concat(aprovado)

                let filaEnviada: any = []

                filaApi.map((registro: any) => {
                    if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                    } else {
                        filaEnviada.push({ ...registro })
                    }
                })

                let filaIni = fila.filter((registro: any) => registro.Estagio === "Iniciado")

                let filaEnvFinal = filaEnviada.concat(filaEnv)

                setFilaEnviada(filaEnvFinal)
                setFilaIniciada(filaIni)

            } else {

                let aprovado = await axios(BancoApiLocal("aprovado")).then(resp => {
                    let dadoAp: any = []

                    resp.data.map((registro: any) => {

                        if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                        } else {
                            if (registro.TipoOS === userMain?.contratoPrincipal && (registro.Equipamento.toLowerCase().match(userMain?.especialidadePrincipal.toLowerCase()) || registro.Equipamento.toLowerCase().match(userMain?.especialidadeSecundaria.replace(/[èéêë]/, "e").toLowerCase()) || registro.Equipamento.toLowerCase().match(userMain?.especialidadeTerciaria.toLowerCase()))) {
                                dadoAp.push({ ...registro })
                            }
                        }
                    })

                    return dadoAp
                })

                let aguardandoVistoria = await axios(BancoApiLocal("aguardandoVistoria")).then(resp => {
                    let dadoAv: any = []


                    resp.data.map((registro: any) => {

                        if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                        } else {
                            if (registro.TipoOS === userMain?.contratoPrincipal && (registro.Equipamento.toLowerCase().match(userMain?.especialidadePrincipal.toLowerCase()) || registro.Equipamento.toLowerCase().match(userMain?.especialidadeSecundaria.replace(/[èéêë]/, "e").toLowerCase()) || registro.Equipamento.toLowerCase().match(userMain?.especialidadeTerciaria.toLowerCase()))) {
                                dadoAv.push({ ...registro })
                            }
                        }
                    })

                    return dadoAv
                })

                let filaEnv = fila.filter((registro: any) => registro.Estagio === "Enviado")

                let filaApi = aguardandoVistoria.concat(aprovado)

                let filaEnviada: any = []

                filaApi.map((registro: any) => {
                    if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                    } else {
                        filaEnviada.push({ ...registro })
                    }
                })

                let filaIni = fila.filter((registro: any) => registro.Estagio === "Iniciado")

                let filaEnvFinal = filaEnviada.concat(filaEnv)

                setFilaEnviada(filaEnvFinal)
                setFilaIniciada(filaIni)
            }

            setFilaFinalizada(filaFinal)

        } catch (e) {

        } finally {
            setCarregarFilaUser(false)
            // console.log(userMain?.especialidadeSecundaria.replace(/[èéêë]/,"e").toLowerCase())
        }

    }

    async function buscarFilaAdd(estagio: string, contrato: string) {
        try {
            setCarregarAdd(true)
            const fila = await axios(Banco("FilaTecnica")).then(resp => {
                let dado: any = []

                resp.data.map((registro: any) => {
                    dado.push({
                        OS: registro.OS,
                        Servico: registro.Servico
                    })
                })

                return dado
            })

            let aprovado = await axios(BancoApiLocal("aprovado")).then(resp => {
                let dado: any = []

                resp.data.map((registro: any) => {
                    if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                    } else {
                        dado.push({ ...registro })
                    }
                })

                return dado
            })
            let aguardandoVistoria = await axios(BancoApiLocal("aguardandoVistoria")).then(resp => {
                let dado: any = []

                resp.data.map((registro: any) => {
                    if (fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)) {

                    } else {
                        dado.push({ ...registro })
                    }
                })

                return dado
            })

            let dadoFinal = aguardandoVistoria.concat(aprovado)

            let resultado = contrato === "" ? dadoFinal.filter((registro: any) => registro.Servico === estagio && registro.TipoOS === "Avulso")
                : dadoFinal.filter((registro: any) => registro.TipoOS === contrato)

            setBancoAdd(resultado)

        } catch (e) {
            console.log(e)
        } finally {
            setCarregarAdd(false)
        }
    }

    async function addFilaUser(tecnico: string) {
        try {

            setCarregarFilaSend(true)

            const enviado: any = document.querySelectorAll('[name=Enviado]:checked');
            const importante: any = document.querySelectorAll('[name=Importante]:checked');

            let dadoEnviado: any = []
            let dadoImportante: any = []

            for (let i = 0; i < enviado.length; i++) {
                dadoEnviado.push(+enviado[i].value)
            }

            for (let i = 0; i < importante.length; i++) {
                dadoImportante.push(+importante[i].value)
            }

            let dadoFinal: any = []

            bancoAdd.map((registro: any) => {
                if (dadoEnviado.find((dado: any) => dado === registro.OS)) {
                    registro.Importante = dadoImportante.find((dado: any) => dado === registro.OS) ? true : false
                    registro.Tecnico = tecnico
                    registro.Estagio = "Enviado"

                    dadoFinal.push(registro)
                }
            })

            if (dadoFinal.length > 0) {
                dadoFinal.map((registro: any) => {
                    sendFila(registro)
                })
            }

        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => {
                setCarregarFilaSend(false)
            }, 3000)
            setBancoAdd([])
        }
    }

    async function buscarFilaDownload(){
       try {    

            const fila = await axios(Banco("FilaTecnica")).then(resp => resp.data)

            const aV = await axios(BancoApiLocal("aguardandoVistoria")).then(resp => {
                let dado: any = []

                resp.data.map((registro: any) => {
                    if(fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)){

                    }else {
                        dado.push({...registro})
                    }
                })

                return dado
            })

            const aP = await axios(BancoApiLocal("aprovado")).then(resp => {
                let dado: any = []

                resp.data.map((registro: any) => {
                    if(fila.find((dado: any) => dado.OS === registro.OS && dado.Servico === registro.Servico)){

                    }else {
                        dado.push({...registro})
                    }
                })

                return dado
            })


            const dado = aV.concat(aP)

            const dadoFinal: any = []

            dado.map((registro: any) => {
                if((registro.TipoOS === userMain?.contratoPrincipal || registro.TipoOS === userMain?.contratoSecundario) && (registro.Equipamento.toLowerCase().match(userMain?.especialidadePrincipal.replace(/[èéêë]/, "e").toLowerCase()))){
                    dadoFinal.push({...registro})
                }
            })

            
            return setBancoDownload(dadoFinal)


       }catch(e){
            console.log(e)
       } 
    }

    function sendFila(atividade: any) {
        const Atividade = atividade
        const method = Atividade.id ? 'put' : 'post'
        const url = Atividade.id ? `${Banco("FilaTecnica")}/${Atividade.id}` : Banco("FilaTecnica")
        axios[method](url, Atividade)
    }

    function salvar(fila: any, banco: string, arrayBnc: any, add: boolean, setBnc: any, arrayBnc2: any, setBnc2: any, modo?: string, id?: number) {
        const Fila = fila
        const method = Fila.id ? 'put' : 'post'
        const url = Fila.id ? `${banco}/${Fila.id}` : banco
        axios[method](url, Fila).then(resp => {
            const list = atualizarListaFila(resp.data, add, arrayBnc)
            setBnc(list)
            const deslist = atualizarListaFila(fila, !add, arrayBnc2)
            setBnc2(deslist)
        })
        
        if(modo === "del"){
            axios.delete(`${Banco("FilaTecnica")}/${id}`)
        }
    }

    function atualizarListaFila(Atividade: any, add = true, banco: any) {
        if(Atividade.id){
            const listagem = banco.filter((a: any) => a.id !==  Atividade.id)
            if (add) listagem.unshift(Atividade)
            return listagem
        }else {
            const listagem = banco.filter((a: any) => a.OS !==  Atividade.OS)
            if (add) listagem.unshift(Atividade)
            return listagem
        }
    }

    function removerFila(registro: any) {
        try {
            axios.delete(`${Banco("FilaTecnica")}/${registro.id}`)
                .then(resp => {
                    const list = atualizarListaFila(registro, false, filaEnviada)
                    setFilaEnviada(list)
                })
        } catch (e) {
            console.log(e)
        }
    }

    function startAtividade(fila: any) {
        try {
            const Fila = fila
            const data = new Date()

            if (Fila.Problema === "Sim") {
                Fila.DataFinalProblema = data
                Fila.DataInicialBruto = Fila.DataInicialBruto
                Fila.Estagio = "Iniciado"
                Fila.ContProblema = Fila.ContProblema
                Fila.DataInicialProblema = Fila.DataInicialProblema
                Fila.Tecnico = localStorage.Tecnico
            } else {
                Fila.Data = data
                Fila.DataInicialBruto = data
                Fila.Estagio = "Iniciado"
                Fila.ContProblema = 0
                Fila.DataInicialProblema = ''
                Fila.Tecnico = localStorage.Tecnico
            }

            salvar(Fila, Banco("FilaTecnica"), filaIniciada, true, setFilaIniciada, filaEnviada, setFilaEnviada)
            
        } catch (e) {
            console.log(e)
        }
    }

    function backAtividade(fila: any) {
        try {
            const tempo = diferenca(fila.DataInicialBruto, '')
            
            if (tempo >= 3) {
                
            } else {
                
                const Fila = fila
                Fila.Estagio = "Enviado"
                
                salvar(Fila, Banco("FilaTecnica"), filaEnviada, true, setFilaEnviada, filaIniciada, setFilaIniciada)
            }
        } catch (e) {
            console.log(e)
        }
    }

    function fecharModalProblema() {
        setOpenModalProblema(false)
        setObsProblema("")
    }
    
    function problemAtividade(fila: any) {
        if (openModalProblema) {
            try {
                const Fila = filaProblema
                const data = new Date()
                
                Fila.Estagio = "Enviado"
                Fila.Problema = "Sim"
                Fila.ContProblema = Fila.ContProblema === null ? 1 : +Fila.ContProblema + 1
                Fila.DataInicialProblema = Fila.DataInicialProblema !== '' ? Fila.DataInicialProblema : data
                Fila.ProblemObs = obsProblema
                
                salvar(Fila, Banco("FilaTecnica"), filaEnviada, true, setFilaEnviada, filaIniciada, setFilaIniciada)
                setOpenModalProblema(false)
                setFilaProblema(fila)
                setObsProblema("")
                
            } catch (e) {
                console.log(e)
            }
        } else {
            setOpenModalProblema(true)
            setFilaProblema(fila)
            setObsProblema(fila.ProblemObs ? fila.ProblemObs : "")
        }
    }
    
    function finishAtividade(fila: any) {
        try {
            const data = new Date()
            const Fila = fila
            
            const Atividade: Atividade = {
                Data: data,
                Dia: data.getDate(),
                Mes: data.getMonth() + 1,
                Ano: data.getFullYear(),
                OS: Fila.OS,
                Cliente: Fila.Cliente,
                Equipamento: equipamento(Fila.Equipamento),
                Modelo: Fila.Equipamento,
                NS: Fila.NS,
                Servico: Fila.Servico,
                Contrato: Fila.TipoOS,
                Estagio: "Finalizado",
                DataInicialBruto: Fila.DataInicialBruto,
                DataFinalBruto: data,
                DataInicialProblema: Fila.DataInicialProblema ? Fila.DataInicialProblema : '',
                DataFinalProblema: Fila.DataFinalProblema ? Fila.DataFinalProblema : '',
                Tecnico: Fila.Tecnico,
                Observacao: Fila.Observacao,
                Problema: Fila.Problema ? Fila.Problema : '',
                ProblemObs: Fila.ProblemObs,
                ContProblema: Fila.ContProblema ? Fila.ContProblema : 0
            }

            salvar(Atividade, Banco("Geral"), filaFinalizada, true, setFilaFinalizada, filaIniciada, setFilaIniciada, "del", Fila.id)
            
        } catch (e) {
            console.log(e)
        }
    }

    function sendMyList(registro: any){
        try{
            
            const Fila = registro
            Fila.Tecnico = userMain?.nomeCompleto
            Fila.Estagio = "Enviado"

            salvar(Fila, Banco("FilaTecnica"), filaEnviada, true, setFilaEnviada, bancoDownload, setBancoDownload)

        }catch(e){
            console.log(e)
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
            filaFinalizada,
            carregarAdd,
            buscarFilaAdd,
            bancoAdd,
            addFilaUser,
            carregarFilaSend,
            removerFila,
            startAtividade,
            backAtividade,
            obsProblema,
            setObsProblema,
            fecharModalProblema,
            openModalProblema,
            problemAtividade,
            finishAtividade,
            openModalDownload,
            setOpenModalDownload,
            buscarFilaDownload, 
            bancoDownload,
            sendMyList
        }}>
            {children}
        </FilaContext.Provider>
    )
}

export default FilaContext;