import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function FileiraCards(){
    return(
        <div className="flex flex-col justify-between ml-3 max-sm:mx-2 h-[100%] max-sm:grid max-sm:grid-cols-1">
            <CardInfo 
                titulo="Total OS" info={123} 
                icone={<FilterNoneIcon fontSize="large"/>} 
                className="bg-stone-700 dark:bg-stone-900 boder-stone-200 dark:border-stone-700 text-white"
                />
            <CardInfo 
                titulo="Total Servico" info={246} 
                icone={<SettingsSuggestIcon fontSize="large"/>} 
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
                />
             <CardInfo 
                titulo="Limpeza" info={246} 
                icone={<CleaningServicesIcon fontSize="large"/>} 
                className="bg-emerald-700 dark:bg-emerald-900 boder-emerald-200 dark:border-emerald-700 text-white"
                />
        </div>
    )
}