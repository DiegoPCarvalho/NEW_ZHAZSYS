import { celular } from "./celular";
import { contrato } from "./contrato";
import { servico } from "./servico";
import { equipamento } from './equipamento';

export function gerenciador(registro: any) {
    return {
        Empresa: registro.EmpresaID,
        OS: registro.OSID,
        Data: registro.OSData,
        AgenteTecnico: registro.AgenteTecNome,
        DataFinalMovto: registro.DataFinalMovto,
        Cliente: registro.PessoaFantasia,
        Servico: servico(registro.EstagioDescricao, registro.DescricaoTipoOS),
        Equipamento: celular(registro.NomeEquipamento),
        Ep: equipamento(registro.NomeEquipamento),
        NS: registro.EquipamentoLTS,
        TipoOS: contrato(registro.DescricaoTipoOS),
    }
}