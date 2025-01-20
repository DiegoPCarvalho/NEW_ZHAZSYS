'use client'
import Layout from "@/components/template/Layout";
import { IconeHome } from "@/components/icons/Index";
import { useEffect, useState } from "react";
import useAppData from "@/data/hook/useAppData";
import useAuthData from "@/data/hook/useAuthData";
import CardHome from "@/components/Home/CardHome";
import DescriptionIcon from '@mui/icons-material/Description';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import GraficoHome from "@/components/Home/GraficoHome";
import { initialGraficoHome, GraficoHomeProps } from "@/data/interfaces/GraficoHome";
import Sistemas from "@/components/Home/Sistemas";
import Setores from "@/components/Home/Setores";
import Cookies from 'js-cookie';
import Ramais from "@/components/Home/Ramais";
import Carregando from "@/components/shared/Carregando";
import axios from "axios";
import Banco from "@/data/database/banco";
import { ArrayParaObjeto } from "@/data/functions/ArrayParaObjeto";
import Image from "next/image";
import tabSup from '@/assets/gifs/tabSup.gif'
import benVindo from "@/assets/gifs/bemvindo-15.gif"
import logo from "@/assets/img/logoZhaz.png"


export default function Home() {
    const { BuscarDadoUserAcesso } = useAppData()
    const {benvindo, setBenvindo } = useAuthData()
    const [acesso, setAcesso] = useState<string>("")
    const [graficoHome, setGraficoHome] = useState<GraficoHomeProps>(initialGraficoHome)
    const [carregando, setCarregando] = useState<boolean>(false)

    useEffect(() => {
        BuscarDadoUserAcesso!()
        buscarCookie()
        buscarDadosHome()
    }, [])

    function buscarCookie() {
        const acesso = Cookies.get("acesso-user")
        setAcesso(acesso!)
    }

    async function buscarDadosHome() {
        try {
            !benvindo ? setCarregando(true) : false

            const tabela = await axios(Banco("Geral")).then(resp => {
                let dado = resp.data
                let data = new Date()

                let tecnico = dado.filter((registro: any) => registro.Tecnico === localStorage.Tecnico)
                let ano = tecnico.filter((registro: any) => registro.Ano === data.getFullYear())

                return ano
            })
            
            const vhlMain = await axios(Banco("VHL")).then(resp => {
                let dado = resp.data
                let data = new Date()

                let tecnico = dado.filter((registro: any) => registro.Tecnico === localStorage.Tecnico)
                let ano = tecnico.filter((registro: any) => registro.Ano === data.getFullYear())

                return ano
            })

            const ramais = await axios(Banco("Ramal")).then(resp => {
                
            })

            //#region dados
            let data = new Date()
            let equipamentos: any = []
            let servico: any = []
            let jan: any = []
            let fev: any = []
            let mar: any = []
            let abr: any = []
            let mai: any = []
            let jun: any = []
            let jul: any = []
            let ago: any = []
            let set: any = []
            let out: any = []
            let nov: any = []
            let dez: any = []
            let d1: any = []
            let d2: any = []
            let d3: any = []
            let d4: any = []
            let d5: any = []
            let d6: any = []
            let d7: any = []
            let d8: any = []
            let d9: any = []
            let d10: any = []
            let d11: any = []
            let d12: any = []
            let d13: any = []
            let d14: any = []
            let d15: any = []
            let d16: any = []
            let d17: any = []
            let d18: any = []
            let d19: any = []
            let d20: any = []
            let d21: any = []
            let d22: any = []
            let d23: any = []
            let d24: any = []
            let d25: any = []
            let d26: any = []
            let d27: any = []
            let d28: any = []
            let d29: any = []
            let d30: any = []
            let d31: any = []

            tabela.map((registro: any) => {
                if(registro.Mes === data.getMonth() +1){
                    servico.push(registro.Servico)
                    equipamentos.push(registro.Equipamento)
                    
                    if(registro.Dia === 1){
                        d1.push(registro.id)
                    }
                    if(registro.Dia === 2){
                        d2.push(registro.id)
                    }
                    if(registro.Dia === 3){
                        d3.push(registro.id)
                    }
                    if(registro.Dia === 4){
                        d4.push(registro.id)
                    }
                    if(registro.Dia === 5){
                        d5.push(registro.id)
                    }
                    if(registro.Dia === 6){
                        d6.push(registro.id)
                    }
                    if(registro.Dia === 7){
                        d7.push(registro.id)
                    }
                    if(registro.Dia === 8){
                        d8.push(registro.id)
                    }
                    if(registro.Dia === 9){
                        d9.push(registro.id)
                    }
                    if(registro.Dia === 10){
                        d10.push(registro.id)
                    }
                    if(registro.Dia === 11){
                        d11.push(registro.id)
                    }
                    if(registro.Dia === 12){
                        d12.push(registro.id)
                    }
                    if(registro.Dia === 13){
                        d13.push(registro.id)
                    }
                    if(registro.Dia === 14){
                        d14.push(registro.id)
                    }
                    if(registro.Dia === 15){
                        d15.push(registro.id)
                    }
                    if(registro.Dia === 16){
                        d16.push(registro.id)
                    }
                    if(registro.Dia === 17){
                        d17.push(registro.id)
                    }
                    if(registro.Dia === 18){
                        d18.push(registro.id)
                    }
                    if(registro.Dia === 19){
                        d19.push(registro.id)
                    }
                    if(registro.Dia === 20){
                        d20.push(registro.id)
                    }
                    if(registro.Dia === 21){
                        d21.push(registro.id)
                    }
                    if(registro.Dia === 22){
                        d22.push(registro.id)
                    }
                    if(registro.Dia === 23){
                        d23.push(registro.id)
                    }
                    if(registro.Dia === 24){
                        d24.push(registro.id)
                    }
                    if(registro.Dia === 25){
                        d25.push(registro.id)
                    }
                    if(registro.Dia === 26){
                        d26.push(registro.id)
                    }
                    if(registro.Dia === 27){
                        d27.push(registro.id)
                    }
                    if(registro.Dia === 28){
                        d28.push(registro.id)
                    }
                    if(registro.Dia === 29){
                        d29.push(registro.id)
                    }
                    if(registro.Dia === 30){
                        d30.push(registro.id)
                    }
                    if(registro.Dia === 31){
                        d31.push(registro.id)
                    }
                }
                if(registro.Mes === 1){
                    jan.push(registro.OS)
                }
                if(registro.Mes === 2){
                    fev.push(registro.OS)
                }
                if(registro.Mes === 3){
                    mar.push(registro.OS)
                }
                if(registro.Mes === 4){
                    abr.push(registro.OS)
                }
                if(registro.Mes === 5){
                    mai.push(registro.OS)
                }
                if(registro.Mes === 6){
                    jun.push(registro.OS)
                }
                if(registro.Mes === 7){
                    jul.push(registro.OS)
                }
                if(registro.Mes === 8){
                    ago.push(registro.OS)
                }
                if(registro.Mes === 9){
                    set.push(registro.OS)
                }
                if(registro.Mes === 10){
                    out.push(registro.OS)
                }
                if(registro.Mes === 11){
                    nov.push(registro.OS)
                }
                if(registro.Mes === 12){
                    dez.push(registro.OS)
                }
            })
            
            vhlMain.map((registro: any) => {
                if(registro.Mes === data.getMonth() + 1){
                    servico.push(registro.Servico)
                    registro.Equipamento.map((reg: any) => {
                        equipamentos.push(reg.Equipamento)
                    })

                    if(registro.Dia === 1){
                        d1.push(registro.id)
                    }
                    if(registro.Dia === 2){
                        d2.push(registro.id)
                    }
                    if(registro.Dia === 3){
                        d3.push(registro.id)
                    }
                    if(registro.Dia === 4){
                        d4.push(registro.id)
                    }
                    if(registro.Dia === 5){
                        d5.push(registro.id)
                    }
                    if(registro.Dia === 6){
                        d6.push(registro.id)
                    }
                    if(registro.Dia === 7){
                        d7.push(registro.id)
                    }
                    if(registro.Dia === 8){
                        d8.push(registro.id)
                    }
                    if(registro.Dia === 9){
                        d9.push(registro.id)
                    }
                    if(registro.Dia === 10){
                        d10.push(registro.id)
                    }
                    if(registro.Dia === 11){
                        d11.push(registro.id)
                    }
                    if(registro.Dia === 12){
                        d12.push(registro.id)
                    }
                    if(registro.Dia === 13){
                        d13.push(registro.id)
                    }
                    if(registro.Dia === 14){
                        d14.push(registro.id)
                    }
                    if(registro.Dia === 15){
                        d15.push(registro.id)
                    }
                    if(registro.Dia === 16){
                        d16.push(registro.id)
                    }
                    if(registro.Dia === 17){
                        d17.push(registro.id)
                    }
                    if(registro.Dia === 18){
                        d18.push(registro.id)
                    }
                    if(registro.Dia === 19){
                        d19.push(registro.id)
                    }
                    if(registro.Dia === 20){
                        d20.push(registro.id)
                    }
                    if(registro.Dia === 21){
                        d21.push(registro.id)
                    }
                    if(registro.Dia === 22){
                        d22.push(registro.id)
                    }
                    if(registro.Dia === 23){
                        d23.push(registro.id)
                    }
                    if(registro.Dia === 24){
                        d24.push(registro.id)
                    }
                    if(registro.Dia === 25){
                        d25.push(registro.id)
                    }
                    if(registro.Dia === 26){
                        d26.push(registro.id)
                    }
                    if(registro.Dia === 27){
                        d27.push(registro.id)
                    }
                    if(registro.Dia === 28){
                        d28.push(registro.id)
                    }
                    if(registro.Dia === 29){
                        d29.push(registro.id)
                    }
                    if(registro.Dia === 30){
                        d30.push(registro.id)
                    }
                    if(registro.Dia === 31){
                        d31.push(registro.id)
                    }
                }
                if(registro.Mes === 1){
                    jan.push(registro.Pedido)
                }
                if(registro.Mes === 2){
                    fev.push(registro.Pedido)
                }
                if(registro.Mes === 3){
                    mar.push(registro.Pedido)
                }
                if(registro.Mes === 4){
                    abr.push(registro.Pedido)
                }
                if(registro.Mes === 5){
                    mai.push(registro.Pedido)
                }
                if(registro.Mes === 6){
                    jun.push(registro.Pedido)
                }
                if(registro.Mes === 7){
                    jul.push(registro.Pedido)
                }
                if(registro.Mes === 8){
                    ago.push(registro.Pedido)
                }
                if(registro.Mes === 9){
                    set.push(registro.Pedido)
                }
                if(registro.Mes === 10){
                    out.push(registro.Pedido)
                }
                if(registro.Mes === 11){
                    nov.push(registro.Pedido)
                }
                if(registro.Mes === 12){
                    dez.push(registro.Pedido)
                }
            })

            const dadoCompleto = tabela.concat(vhlMain)

            const avulso = tabela.filter((registro: any) => registro.Contrato === "Avulso")
            const contratos = tabela.filter((registro: any) => registro.Contrato !== "Avulso")
            const servicos = tabela.length
            const vhl = vhlMain.length
            const graficoEquipamento = ArrayParaObjeto(equipamentos)
            const graficoServico = ArrayParaObjeto(servico)
            const graficoAnual = [
                {name:"Jan", y: jan.length},
                {name:"Fev", y: fev.length},
                {name:"Mar", y: mar.length},
                {name:"Abr", y: abr.length},
                {name:"Maio", y: mai.length},
                {name:"Jun", y: jun.length},
                {name:"Jul", y: jul.length},
                {name:"Ago", y: ago.length},
                {name:"Set", y: set.length},
                {name:"Out", y: out.length},
                {name:"Nov", y: nov.length},
                {name:"Dez", y: dez.length},
            ]
            const graficoProdDiaria = [
                {name: "1", y: d1.length},
                {name: "2", y: d2.length},
                {name: "3", y: d3.length},
                {name: "4", y: d4.length},
                {name: "5", y: d5.length},
                {name: "6", y: d6.length},
                {name: "7", y: d7.length},
                {name: "8", y: d8.length},
                {name: "9", y: d9.length},
                {name: "10", y: d10.length},
                {name: "11", y: d11.length},
                {name: "12", y: d12.length},
                {name: "13", y: d13.length},
                {name: "14", y: d14.length},
                {name: "15", y: d15.length},
                {name: "16", y: d16.length},
                {name: "17", y: d17.length},
                {name: "18", y: d18.length},
                {name: "19", y: d19.length},
                {name: "20", y: d20.length},
                {name: "21", y: d21.length},
                {name: "22", y: d22.length},
                {name: "23", y: d23.length},
                {name: "24", y: d24.length},
                {name: "25", y: d25.length},
                {name: "26", y: d26.length},
                {name: "27", y: d27.length},
                {name: "28", y: d28.length},
                {name: "29", y: d29.length},
                {name: "30", y: d30.length},
                {name: "31", y: d31.length},
            ]
            


            const dadoFinal = {
                avulso: avulso.length,
                contratos: contratos.length,
                servicos,
                vhl,
                graficoProdDiaria,
                graficoServico,
                graficoAnual,
                graficoEquipamento,
            }
            //endregion 

            return setGraficoHome(dadoFinal)

        } catch (e) {
            console.log(e + "Falha na Comunicação com o Banco de Dados")
        } finally {
            setCarregando(false)
            setBenvindo!(false)
        }
    }

    return benvindo ? <div
        className="
            flex flex-col justify-evenly items-center
            bg-neutral-900 h-screen w-screen
        "
    ><span className="hidden">.</span>
            <Image src={benVindo} alt="" className="rounded-full opacity-70"/>
            <div className="flex items-center justify-evenly">
                <Image src={logo} alt=""/>
                    <span className="text-7xl text-neutral-200">ao ZHAZSYS</span>
                <Image src={tabSup} alt=""  className="w-36 h-36 ml-5"/>
            </div>
        </div> :
        <Layout icone={IconeHome} texto="Home">
                {carregando ? <div className="flex justify-center items-center h-full">
                    <Carregando cor="success" tamanho={300} grafico />
                </div> : <>
                <div className="grow h-full">
                    <div className="flex">
                        <div className="flex flex-col grow w-[75%]">
                            <div className="ml-1 flex justify-between">
                                <CardHome titulo="Avulso" qtde={graficoHome?.avulso} icone={<DescriptionIcon fontSize="large" />} corIcone="bg-yellow-500 dark:bg-yellow-600 text-white rounded-md p-2 max-[1024px]:p-1" />
                                <CardHome titulo="Contratos" qtde={graficoHome?.contratos} icone={<DriveFileMoveIcon fontSize="large" />} corIcone="bg-blue-500 dark:bg-blue-600 text-white rounded-md p-2 max-[1024px]:p-1" />
                                <CardHome titulo="Serviços" qtde={graficoHome?.servicos} icone={<LibraryBooksIcon fontSize="large" />} corIcone="bg-green-500 dark:bg-green-600 text-white rounded-md p-2 max-[1024px]:p-1" />
                                <CardHome titulo="VHL" qtde={graficoHome?.vhl} icone={<ShoppingCartCheckoutIcon fontSize="large" />} corIcone="bg-purple-500 dark:bg-purple-600 text-white rounded-md p-2 max-[1024px]:p-1" />
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <Ramais />
                                <div className="grow max-[1024px]:w-full">
                                    <GraficoHome
                                        titulo="Produtividade Diaria do Mês atual"
                                        tipo="column"
                                        formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                        texto='{point.y:1f}'
                                        vertical={300}
                                        dado={graficoHome?.graficoProdDiaria}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%] max-[1024px]:grow">
                            <GraficoHome
                                titulo="Serviço do Mês atual"
                                tipo="column"
                                formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                texto='{point.y:1f}'
                                cor
                                horizontal={400}
                                vertical={410}
                                dado={graficoHome?.graficoServico}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-between">
                            <Sistemas />
                            <Setores acesso={acesso} />
                        </div>
                        <div className="flex justify-evenly grow">
                            <div className="w-[50%]">
                                <GraficoHome
                                    titulo="Produtividade Anual"
                                    tipo="spline" 
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    vertical={380}
                                    dado={graficoHome?.graficoAnual}
                                />
                            </div>
                            <div className="w-[50%]">
                                <GraficoHome
                                    titulo="Equipamentos do Mês atual"
                                    tipo="column"
                                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.y:1f}</b> do total<br/>'
                                    texto='{point.y:1f}'
                                    cor
                                    vertical={380}
                                    dado={graficoHome?.graficoEquipamento}
                                />
                            </div>
                        </div>

                    </div>
                </div>  
                </>}
        </Layout>
}