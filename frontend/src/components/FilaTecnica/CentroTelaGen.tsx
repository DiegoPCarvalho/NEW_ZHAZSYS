import useFilaData from "@/data/hook/useFilaData";
import { IconFila, IconAddFila } from "../icons/IconesMaterial";
import Botao from "../shared/Botao";
import SearchIcon from '@mui/icons-material/Search';

export default function CentroTelaGen() {
    const { setTela, setOpenMS } = useFilaData()

    return (
        <div className="flex justify-between w-64 max-md:w-36">
            <Botao
                className="
                    flex flex-col items-center justify-center h-20 w-20 max-md:w-16 max-sm:w-16 max-md:h-16 max-sm:h-16
                    transition-all bg-blue-500 dark:bg-blue-700 text-white  rounded-lg
                    border-blue-600 dark:border-blue-800
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                "
                executar={() => setTela!("AddFila")}
            >
                <IconAddFila sx={{fontSize: 50}}/>
            </Botao>
            <Botao
                className="
                    flex flex-col items-center justify-center h-20 w-20 max-md:w-16 max-sm:w-16 max-md:h-16 max-sm:h-16
                    transition-all bg-blue-500 dark:bg-blue-700 text-white  rounded-lg
                    border-blue-600 dark:border-blue-800
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                "
                executar={() => setTela!("FilaGerenciada")}
            >
                <IconFila sx={{ fontSize: 50}}/>
            </Botao>
            <Botao
                className="
                    flex flex-col items-center justify-center h-20 w-20 max-md:w-16 max-sm:w-16 max-md:h-16 
                    transition-all bg-blue-500 dark:bg-blue-700 text-white  rounded-lg max-sm:hidden max-md:hidden
                    border-blue-600 dark:border-blue-800
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                "
                executar={() => setOpenMS!(true)}
            >
                <SearchIcon sx={{ fontSize: 50}}/>
            </Botao>
        </div>
    )
}