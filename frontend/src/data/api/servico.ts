export function servico(serv: string, tipo: string) {
    if ((serv === "Aguardando Equipamento chegar na ZHAZ" || serv === "Aguardando Vistoria" || serv === "Em Vistoria" || serv === "Vistoriado") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Laudo"
    } else if ((serv === "Aprovado (Aguardando Manutencao)" || serv === "'Em Manutencao / Atendimento'" || serv === "Manutencao Concluida / Limpeza") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Manutenção Concluída"
    } else if (serv === "Reprovado (Aguardando Liberacao)" && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Revisão de Reprovado"
    } else if ((serv === "Aguardando Vistoria" || serv === "Em Manutencao / Atendimento" || serv === "Manutencao Concluida / Limpeza") && (tipo === "MANUTENCAO (ON-SITE)" || tipo === "C&A - (ON-SITE)")) {
        return "Chamado On-Site"
    } else if ((serv === "Suporte Remoto" || serv === "Abertura Suporte" || serv === "Em Atendimento - SR" || serv === "Vistoriado") && (tipo.match(/CONTRATO/) || tipo === "SUPORTE REMOTO" || tipo === "SUPORTE REMOTO - AMERICANAS" || tipo === "SUPORTE REMOTO - CONTRATO ASSAI")) {
        return "Suporte Remoto"
    } else if ((serv === "Expedicao e Faturamento") && (tipo.match(/CONTRATO/) || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES" || tipo === "SUPORTE REMOTO" || tipo === "SUPORTE REMOTO - AMERICANAS" || tipo === "MANUTENCAO CORRETIVA LABORATORIO" || tipo === "BOTICARIO AVULSO - COLETORES")) {
        return "Limpeza"
    }else {
    	return "On-Site"
    }
}