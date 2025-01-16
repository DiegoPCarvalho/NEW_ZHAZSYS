import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { IconVHL } from "@/components/icons/IconesMaterial";


export default function Cards() {
    return (
        <div className="flex flex-col justify-between ml-2 max-sm:justify-start">
            <CardInfo
                titulo="Total VHL" info={123}
                icone={<IconVHL fontSize="large" />}
                dash
                className="bg-emerald-700 dark:bg-emerald-800 boder-emerald-200 dark:border-emerald-700 text-white"
            />
            <CardInfo
                titulo="Total OS" info={123}
                icone={<FilterNoneIcon fontSize="large" />}
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
                click
                dash
                executar={() => console.log("meta")}
                />
            <CardInfo
                titulo="Total Servico" info={246000} info2={21300000}
                limpeza
                icone={<SettingsSuggestIcon fontSize="large" />}
                icone2={<CleaningServicesIcon fontSize="large" />}
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
                click
                executar={() => console.log("meta")}
            />
            <CardInfo
                titulo="Tempo" info={"10000:00:00"}
                icone={<AccessAlarmIcon fontSize="large" />}
                className="bg-red-700 dark:bg-red-900 boder-red-200 dark:border-red-700 text-white"
                tempo
                dash
            />
        </div>
    )
}