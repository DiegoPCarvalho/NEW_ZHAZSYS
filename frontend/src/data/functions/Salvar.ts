import axios from 'axios'

export function salvar(dado: any, banco: string) {
    const Data = dado
    const method = Data.id ? 'put' : 'post'
    const url = Data.id ? `${banco}/${Data.id}` : banco
    axios[method](url, Data).catch(e => console.log("Erro: " + e))
}