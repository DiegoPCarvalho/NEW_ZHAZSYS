import Carregando from '@/components/shared/Carregando';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

interface CentroTelaFormProps {
    os?: string
    buscar: () => void
    loading: boolean
}

export default function CentroTelaForm(props: CentroTelaFormProps) {
    return props.loading ? (
        <div className="flex flex-col justify-center items-center w-full">
            <Carregando cor="success" tamanho={60} />
            <span className="font-bold dark:text-neutral-200 text-xl">Carregando...</span>
        </div>
    ) : (
        <div className="
            flex flex-col items-center justify-center h-24 w-44 max-md:w-36 max-sm:w-28
            cursor-pointer transition-all bg-stone-500 dark:bg-stone-700 text-white  rounded-lg
            border-stone-600 dark:border-stone-800
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={props.buscar}>
            <div className="font-bold text-2xl text-gray-200 max-sm:text-lg" >Ultima OS</div>
            <div className="flex justify-between"><span><MiscellaneousServicesIcon sx={{ fontSize: 30 }} /></span><span className='ml-2 text-lg'>{props.os}</span></div>
        </div>
    )
}