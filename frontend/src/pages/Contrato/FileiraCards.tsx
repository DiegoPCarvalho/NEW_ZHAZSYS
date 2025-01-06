import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


interface FileiraCardsProps {
    OS: number
    Servico: number
    Limpeza: number
}

export default function FileiraCards(props: FileiraCardsProps){
    return(
        <div className="flex flex-col justify-between ml-3 max-sm:mx-2 h-[100%] max-sm:grid max-sm:grid-cols-1">
            <CardInfo 
                titulo="Total OS" info={props.OS} 
                icone={<FilterNoneIcon fontSize="large"/>} 
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
                />
            <CardInfo 
                titulo="Total Serviço" info={props.Servico} 
                icone={<SettingsSuggestIcon fontSize="large"/>} 
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
                />
             <CardInfo 
                titulo="Limpeza" info={props.Limpeza} 
                icone={<CleaningServicesIcon fontSize="large"/>} 
                className="bg-red-700 dark:bg-red-900 boder-red-200 dark:border-red-700 text-white"
                />
        </div>
    )
}