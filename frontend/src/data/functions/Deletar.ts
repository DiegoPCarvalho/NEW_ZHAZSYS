import axios from 'axios'

export function remover(dado: any, banco: string){
    axios.delete(`${banco}/${dado.id}`).catch(e => console.log("Erro: " + e))
}