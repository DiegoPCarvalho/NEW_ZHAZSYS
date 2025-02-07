export function celular(equipamento: string) {
    if(equipamento.match(/CELULAR/)){
        return equipamento.replace("CELULAR", "SMARTPHONE")
    }else {
        return equipamento
    }
}