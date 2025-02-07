export function equipamento(equip: string) {
    if (equip) {
        if (equip.match(/COLETOR DE/)) {
            return "Coletor de Dados"
        } else if (equip.match(/TERMINAL DE CONSULTA/)) {
            return "Terminal de Consulta"
        } else if (equip.match(/IMPRESSORA/)) {
            return "Impressora Térmica"
        } else if (equip.match(/LEITOR DE RFID/) || equip.match(/ANTENA RFID/)) {
            return "Leitor de RFID"
        } else if (equip.match(/LEITOR/)) {
            return "Leitor de Dados"
        } else if (equip.match(/3 POSICOES/)) {
            return "Carregador de 3 Posições"
        } else if (equip.match(/4 POSICOES/)) {
            return "Carregador de 4 Posições"
        } else if (equip.match(/5 POSICOES/)) {
            return "Carregador de 5 Posições"
        } else if (equip.match(/6 POSICOES/)) {
            return "Carregador de 6 Posições"
        } else if (equip.match(/1 POSICOES/)) {
            return "Berço de Comunicação"
        } else if (equip.match(/FONTE/)) {
            return "Fonte de Alimentação"
        } else if (equip.match(/CABO CONFECCIONADO/)) {
            return "Cabo Confeccionado"
        } else if (equip.match(/BATERIA/)) {
            return "Bateria"
        } else if (equip.match(/TECLADO/)) {
            return "Teclado"
        } else if (equip.match(/GATILHO/)) {
            return "Gatilho Móvel"
        } else if (equip.match(/TABLET/) && equip !== "BERCO DE 4 POSICOES PARA TABLET ZEBRA ET51") {
            return "Tablet"
        } else if (equip.match(/CELULAR/) || equip.match(/SMARTPHONE/)) {
            return "Smartphone"
        } else if (equip === "DOCKING STATION ZEBRA GAMBER JOHNSON HDMI") {
            return "Doca p/Tablet"
        }
        else {
            return equip
        }
    } else {
        return
    }
}