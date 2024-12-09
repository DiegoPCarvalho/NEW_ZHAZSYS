import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export default function CardsLab(){
    return(
        <div className="flex flex-col justify-evenly max-sm:w-full">
            <CardInfo 
                titulo="Total OS" info={123} 
                icone={<FilterNoneIcon fontSize="large"/>} 
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
                />
            <CardInfo 
                titulo="Total Servico" info={246} 
                icone={<SettingsSuggestIcon fontSize="large"/>} 
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
                />
        </div>
    )
}