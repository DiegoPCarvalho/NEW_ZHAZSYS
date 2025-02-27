import { ArrayParaObjeto } from "./ArrayParaObjeto"

export function Series(tabela: any, dado: any, serie: any, tipo: boolean){
    serie.push({
        name: dado.name,
        id: dado.name,
        data: retornoSerie(tabela, dado.name, tipo)
    })
}

function retornoSerie(tabela:any, dado: any, tipo: boolean){
    let dados: any = []
    tabela.map((registro: any) => {
        if(dado === registro.Servico){
            dados.push(tipo ? registro.Contrato === undefined || registro.Contrato === "Laudo" ? "Avulso" : registro.Contrato  : registro.Equipamento)
        }
    })  

    const serie = ArrayParaObjeto(dados)

    return serie
}