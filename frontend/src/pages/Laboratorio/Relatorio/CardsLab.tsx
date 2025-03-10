import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


interface CardsLabProps {
    OS: number
    Servico: number
}

export default function CardsLab(props: CardsLabProps){
    return(
        <div className="flex flex-col justify-evenly ml-3 max-sm:mx-2 h-[100%] max-sm:grid max-sm:grid-cols-1">
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
        </div>
    )
}