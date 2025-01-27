import { createContext, useState } from "react";
import { initialLoadOS, LoadOS } from "../interfaces/FilaGen";
import axios from "axios";
import Banco from "../database/banco";
import { dataNova } from "../functions/DataNova";

interface FilaContextProps {
    tela?: string
    setTela?: (novoValor: string) => void
    openMS?: boolean
    setOpenMS?: (novoValor: boolean) => void
    dadoOSFila?: LoadOS
    buscarOSFila?:(OS: string) => void
    carregarLoadOS?: boolean
}

const FilaContext = createContext<FilaContextProps>({})

export function FilaProvider({children} : any){
    const [tela, setTela] = useState<string>("AddFila")
    const [openMS, setOpenMS] = useState<boolean>(false)
    const [dadoOSFila, setDadoOSFila] = useState<LoadOS>(initialLoadOS)
    const [carregarLoadOS, setCarregarLoadOS] = useState<boolean>(false)

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

            // console.log(loadOS[0])
        }catch(e){
            console.log(e)
        }finally{
            setCarregarLoadOS(false)
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
            carregarLoadOS
        }}>
            {children}
        </FilaContext.Provider>
    )
}

export default FilaContext;