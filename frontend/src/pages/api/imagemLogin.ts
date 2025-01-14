import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'

type Data = {
    name: string[]
}

export default  async function LoginPage(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
){
    const dado = await axios("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR")
        .then(resp => resp.data)

    res.json(dado)
}