import Botao from "@/components/shared/Botao";
import Selecione from "@/components/shared/Selecione";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function FiltroContrato() {
    return (
        <div className="flex w-[80%] justify-center max-sm:grid max-sm:grid-cols-1">
            <div className="max-sm:hidden mr-3 h-full flex items-center"><FilterAltIcon sx={{ fontSize: 50 }} className="text-red-500 dark:text-red-800"/></div>
            <div className="flex w-[70%] max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]">
                <Selecione
                    texto="Contrato:"
                    nome="Contrato"
                    className="grow"
                >
                    <option>aaaaaaaaaaaaaaaaaaaaa</option>
                </Selecione>
                <Selecione
                    texto="Dia:"
                    nome="Dia"
                    className="grow"
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
                </Selecione>
                <Selecione
                    texto="Mês:"
                    nome="Mes"
                    className="grow"
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
                    nome="Ano"
                    className="grow"
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
            <div className="flex h-[95%] items-end  ml-3 max-sm:justify-end max-sm:h-16">
                <Botao
                    className={`
                            cursor-pointer transition-all bg-emerald-500 dark:bg-emerald-700 text-white px-5 py-2 rounded-lg
                            border-emerald-600 dark:border-emerald-800
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        `}

                    executar={() => console.log("")}
                >Buscar</Botao>
            </div>
        </div>
    )
}