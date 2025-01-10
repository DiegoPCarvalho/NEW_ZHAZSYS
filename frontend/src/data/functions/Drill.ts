import { ArrayParaObjeto } from "./ArrayParaObjeto"

export function Drill(servico: any) {
    const serv = ArrayParaObjeto(servico)
    let servicoDrill = []

    for (let x = 0; x < serv.length; x++) {
        servicoDrill.push({
            name: serv[x].name,
            y: serv[x].y,
            drilldown: serv[x].name
        })
    }

    return servicoDrill
}