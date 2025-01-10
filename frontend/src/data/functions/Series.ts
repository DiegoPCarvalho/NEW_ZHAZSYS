import { ArrayParaObjeto } from "./ArrayParaObjeto"

export function Series(tabela: any, dado: any, serie: any){
    serie.push({
        name: dado.name,
        id: dado.name,
        data: retornoSerie(tabela, dado.name)
    })
}

function retornoSerie(tabela:any, dado: any){
    let dados: any = []
    tabela.map((registro: any) => {
        if(dado === registro.Servico){
            dados.push(registro.Equipamento)
         }
    })  

    const serie = ArrayParaObjeto(dados)

    return serie
}