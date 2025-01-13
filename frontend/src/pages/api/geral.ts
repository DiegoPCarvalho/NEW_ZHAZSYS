import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'
import BancoApi from '@/data/database/bancoApi';
import { contrato } from '@/data/api/contrato';
import { equipamento } from '@/data/api/equipamento';
import { servico } from '@/data/api/servico';

type Data = {
    name: string[]
}

export default async function Geral(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    const tabelaGeral = await buscarDados()

    let dado: any = []

    tabelaGeral.map((tabelaGeral: any) => {
        dado.push({
            OS: tabelaGeral.OSID,
            Cliente: tabelaGeral.PessoaFantasia,
            Servico: servico(tabelaGeral.EstagioDescricao, tabelaGeral.DescricaoTipoOS),
            Equipamento: equipamento(tabelaGeral.NomeEquipamento),
            Modelo: tabelaGeral.NomeEquipamento,
            Contrato: contrato(tabelaGeral.DescricaoTipoOS),
            NS: tabelaGeral.EquipamentoLTS
        })
    })

    res.json(dado)
}



async function buscarDados() {
    const tabela = await axios(BancoApi(1)).then(resp => resp.data)
    const tabela2 = await axios(BancoApi(2)).then(resp => resp.data)
    const tabela3 = await axios(BancoApi(3)).then(resp => resp.data)
    const tabela4 = await axios(BancoApi(4)).then(resp => resp.data)
    const tabela5 = await axios(BancoApi(5)).then(resp => resp.data)
    const tabela8 = await axios(BancoApi(8)).then(resp => resp.data)
    const tabela9 = await axios(BancoApi(9)).then(resp => resp.data)
    const tabela11 = await axios(BancoApi(11)).then(resp => resp.data)
    const tabela13 = await axios(BancoApi(13)).then(resp => resp.data)
    const tabela16 = await axios(BancoApi(16)).then(resp => resp.data)
    const tabela17 = await axios(BancoApi(17)).then(resp => {
        const tab = resp.data
        let dado: any = []

        tab.map((registro: any) => {
            if(registro.OSSituacao === "Expedição"){
                dado.push({...registro})
            }
        })

        return dado
    })
    const tabela21 = await axios(BancoApi(21)).then(resp => resp.data)
    const tabela25 = await axios(BancoApi(25)).then(resp => resp.data)
    const tabela30 = await axios(BancoApi(30)).then(resp => resp.data)
    
    const tabelaGeral = [...tabela, ...tabela2, ...tabela3,
    ...tabela4, ...tabela5, ...tabela8,
    ...tabela9, ...tabela11, ...tabela13,
    ...tabela16, ...tabela17, ...tabela21, ...tabela25, ...tabela30]

    return tabelaGeral
}