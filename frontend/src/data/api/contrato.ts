export function contrato(cont: string) {
    if (cont.match(/CONTRATO AMERICANAS/)) {
        return "Contrato B2W"
    } else if (cont.match(/CONTRATO ASSAI/)) {
        return "Contrato Assaí"
    } else if (cont.match(/CONTRATO C&A/)) {
        return "Contrato C&A"
    } else if (cont.match(/CONTRATO MARISA/)) {
        return "Contrato Marisa"
    } else if (cont.match(/CONTRATO PERALTA - SEAL/)) {
        return "Contrato Peralta - Seal"
    } else if (cont.match(/CONTRATO MACHADO/)) {
        return "Contrato Machado"
    } else if (cont.match(/CONTRATO DISCRA/)) {
        return "Contrato Discra"
    } else if (cont.match(/CONTRATO COMFRIO/)) {
        return "Contrato Comfrio"
    } else if (cont.match(/CONTRATO BOTICARIO/)) {
        return "Contrato Boticário"
    } else if (cont.match(/CONTRATO PILKINGTON/)) {
        return "Contrato Pilkington"
    } else {
        return "Avulso"
    }
}