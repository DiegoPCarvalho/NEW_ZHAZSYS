import useGncData from "@/data/hook/useGncData";
import Botao from "./Botao";
import Selecione from "./Selecione";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FiltroGncProps } from "@/data/interfaces/FiltroGncProps";

interface FiltroGnc {
    modo?: string
    semDia?: boolean
    filtro: FiltroGncProps
    alterarCampo:(novoValor: any) => void
    buscar?: () => void 
}

export default function FiltroGnc(props: FiltroGnc){
    const { contratos } = useGncData()

    return(
        <div className="flex justify-center max-sm:grid max-sm:grid-cols-1">
            <div className="max-sm:hidden mr-3 flex items-center"><FilterAltIcon sx={{ fontSize: 50 }} className="text-red-500 dark:text-red-800"/></div>
            <div className="flex max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]">
             {props.modo === "contrato" ?  <Selecione
                    texto="Contrato:"
                    nome="contrato"
                    className="grow"
                    valor={props.filtro?.contrato}
                    alterouCampo={e => props.alterarCampo(e)}
                    filtro
                >
                    {contratos!.map((registro: any) => {
                        return(
                            <option key={registro.id}>{registro.nome}</option>
                        )
                    })}
                </Selecione> : false}
                {props.modo === "gerencia" ?  <Selecione
                    texto="Técnico:"
                    nome="tecnico"
                    className="grow"
                    valor={props.filtro?.tecnico}
                    alterouCampo={e => props.alterarCampo(e)}
                    filtro
                >
                    
                </Selecione> : false}
                {props.semDia === true ? false : <Selecione
                    texto="Dia:"
                    nome="dia"
                    className="grow"
                    valor={props.filtro?.dia}
                    alterouCampo={e => props.alterarCampo(e)}
                    filtro
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </Selecione> }
                <Selecione
                    texto="Mês:"
                    nome="mes"
                    className="grow"
                    valor={props.filtro?.mes}
                    alterouCampo={e => props.alterarCampo(e)}
                    filtro
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Selecione>
                <Selecione
                    texto="Ano:"
                    nome="ano"
                    className="grow"
                    valor={props.filtro?.ano}
                    alterouCampo={e => props.alterarCampo(e)}
                    filtro
                >
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                </Selecione>
            </div>
            <div className="flex items-center ml-3 max-sm:justify-end max-sm:h-16">
                <Botao
                    className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                    executar={props.buscar}
                >Buscar</Botao>
            </div>
        </div>
    )
}