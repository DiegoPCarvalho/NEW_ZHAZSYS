import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'
import BancoApi from '@/data/database/bancoApi';
import { gerenciador } from '@/data/api/gerenciador';

type Data = {
    name: string[]
}

export default async function Aprovado(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    const dado = await axios(BancoApi(8))
        .then(resp => {
            const registros = resp.data
            let dados: any = []

            registros.map((registro: any) => {
                if(registro.EmpresaID === 1){
                    dados.push(gerenciador(registro))
                }
            })

            return dados
        })
        
    res.json(dado)
}