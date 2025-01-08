import { createContext, useState } from "react";
import { Vhl, initialVhl, VhlEquip, initialVhlEquip } from "../interfaces/Vhl";
import Banco from "../database/banco";
import { salvar } from "../functions/Salvar";
import axios from "axios";
import { Mensagem, initialMSG } from "@/data/interfaces/Mensagem";
import { severity, variant } from "@/data/type/mensagemSistema";

interface VhlContextProps {
    vhlForm?: Vhl
    vhlEquip?: VhlEquip
    equipLista?: any[]
    quantidade?: number
    alterar?: boolean
    banco?: any[]
    open?: boolean
    mensagem?: Mensagem
    excluir?: boolean
    vl?: string
    openM?: boolean
    setOpenM?: (novoValor: boolean) => void
    setVl?: (novoValor: any) => any
    setExcluir?: (novoValor: boolean) => void
    setOpen?: (novoValor: boolean) => void
    alterarCampoVhlForm?: (novoValor: any) => void
    alterarCampoVhlEquip?: (novoValor: any) => void
    limparCampos?: () => void
    addEquipamento?: () => void
    removeEquipamento?: (dado: any) => void
    verificar?: () => void
    BuscarTabelaVhl?: () => Promise<void>
    confirmeRemove?: () => void
    abrirRemove?: (vhl: Vhl) => void
    loadVhl?: (vhl: Vhl) => void
    finalizarEdit?: () => void
}

const VhlContext = createContext<VhlContextProps>({})

export function VhlProvider({ children }: any) {
    const [vhlForm, setVhlForm] = useState<Vhl>(initialVhl)
    const [vhlEquip, setVhlEquip] = useState<VhlEquip>(initialVhlEquip)
    const [equipLista, setEquipLitsa] = useState<any[]>([])
    const [alterar, setAlterar] = useState<boolean>(false)
    const [quantidade, setQuantidade] = useState<number>(0)
    const [banco, setBanco] = useState<any[]>([])
    const [open, setOpen] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<Mensagem>(initialMSG)
    const [excluir, setExcluir] = useState<boolean>(false)
    const [soExcluir, setSoExcluir] = useState<Vhl>(initialVhl)
    const [vl, setVl] = useState<string>("")
    const [openM, setOpenM] = useState<boolean>(false)
    const baseUrl = Banco("VHL")

    async function BuscarTabelaVhl() {
        const tabela = await axios(baseUrl).then(resp => {
                let dado = resp.data
                let data = new Date()

                const result = dado.filter((registro: any) => registro.Ano === data.getFullYear())
                const resultFinal = result.filter((registro: any) => registro.Mes === data.getMonth() + 1)
                return resultFinal
        })

        return setBanco(tabela)
    }

    function alterarCampoVhlForm(event: any) {
        const Vhl: any = { ...vhlForm }
        Vhl[event.target.name] = event.target.value
        setVhlForm(Vhl)
    }

    function alterarCampoVhlEquip(event: any) {
        const VhlE: any = { ...vhlEquip }
        VhlE[event.target.name] = event.target.value
        setVhlEquip(VhlE)
    }

    function limparCampos() {
        if (alterar) {
            setOpenM(!openM)
            setAlterar(!alterar)
        }
        setVhlForm(initialVhl)
        setVhlEquip(initialVhlEquip)
        setEquipLitsa([])
        setQuantidade(0)
        setSoExcluir(initialVhl)
    }

    async function loadVhl(vhl: Vhl) {
        setAlterar(!alterar)
        setOpenM(!openM)
        await setVhlForm(vhl)
        setEquipLitsa(vhl.Equipamento)
        setQuantidade(vhl.QTDE)
    }

    function addEquipamento() {
        const equip = vhlEquip

        equip.id = equip.NS

        if (equip.Equipamento === "" || equip.Modelo === "" || equip.NS === "") {
            console.log("campo não preenchidos")
        } else {
            equipLista.push(equip)
            setVhlEquip(initialVhlEquip)
            setQuantidade(equipLista.length)
        }
    }

    function remove(vhl: Vhl) {
        axios.delete(`${baseUrl}/${vhl.id}`)
            .then(resp => {
                const list = atualizarLista(vhl, false)
                setBanco(list)
            })
    }

    function confirmeRemove() {
        try {
            remove(soExcluir)
            setSoExcluir(initialVhl)
            setExcluir(!excluir)
            mensagemSistema("success", "filled", "Excluido com Sucesso !!!")
        } catch (e) {
            mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
        }
    }

    function abrirRemove(vhl: Vhl) {
        setExcluir(!excluir)
        setSoExcluir(vhl)
    }

    function atualizarLista(vhl: any, add = true) {
        const list = banco.filter(a => a.id !== vhl.id)
        if (add) list.push(vhl)
        return list
    }


    function removeEquipamento(dado: any) {
        const resultado = equipLista.filter((registro: any) => registro.id !== dado.id)

        setEquipLitsa(resultado)
        setQuantidade(resultado.length)
    }

    function verificar() {
        try {
            const vhl = vhlForm

            if (vhl.Pedido === "" || vhl.Cliente === "" || vhl.Servico === "") {
                mensagemSistema("error", "filled", "Faltou preencher algum(s) campo(s)")
            } else {

                if (vhl.Data === "") {
                    const dt = new Date()

                    vhl.Data = dt
                    vhl.Dia = dt.getDate()
                    vhl.Mes = dt.getMonth() + 1
                    vhl.Ano = dt.getFullYear()
                    vhl.Tecnico = localStorage.Tecnico
                    vhl.QTDE = quantidade
                    vhl.Equipamento = equipLista

                } else {
                    const dt = new Date(vhl.Data)

                    vhl.Dia = dt.getDate()
                    vhl.Mes = dt.getMonth() + 1
                    vhl.Ano = dt.getFullYear()
                    vhl.Tecnico = localStorage.Tecnico
                    vhl.QTDE = quantidade
                    vhl.Equipamento = equipLista
                }

                if (alterar) {
                    const Data = vhlForm
                    const method = Data.id ? 'put' : 'post'
                    const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
                    axios[method](url, Data)
                        .then(resp => {
                            const banco = atualizarLista(resp.data)
                            setBanco(banco)
                            mensagemSistema("success", "filled", "Salvo Com Sucesso !!!")
                        }).catch(erro => console.log(erro))
                } else {
                    salvar(vhlForm, baseUrl)
                    limparCampos()
                    mensagemSistema("success", "filled", "Salvo com Sucesso !!!")
                }
            }

        } catch (e) {
            mensagemSistema("error", "filled", "Sem Comunicação com Banco de Dados")
        }
    }

    function finalizarEdit() {
        if (alterar) {
            const Data = vhlForm
            const method = Data.id ? 'put' : 'post'
            const url = Data.id ? `${baseUrl}/${Data.id}` : baseUrl
            axios[method](url, Data)
                .then(resp => {
                    const banco = atualizarLista(resp.data)
                    setBanco(banco)
                    mensagemSistema("success", "filled", "Salvo Com Sucesso !!!")
                    limparCampos()
                }).catch(erro => console.log(erro))
        }
    }

    function mensagemSistema(tipo: severity, modelo: variant, mensagem: string) {
        setOpen(true)
        setMensagem({
            severity: tipo,
            variant: modelo,
            mensagem: mensagem
        })
    }

    return (
        <VhlContext.Provider
            value={{
                vhlForm,
                vhlEquip,
                equipLista,
                alterar,
                quantidade,
                banco,
                open,
                mensagem,
                excluir,
                vl,
                openM,
                setOpenM,
                setVl,
                setExcluir,
                setOpen,
                alterarCampoVhlForm,
                alterarCampoVhlEquip,
                limparCampos,
                addEquipamento,
                removeEquipamento,
                verificar,
                BuscarTabelaVhl,
                confirmeRemove,
                abrirRemove,
                loadVhl,
                finalizarEdit
            }}
        >
            {children}
        </VhlContext.Provider>
    )
}

export default VhlContext;