import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


export default function Cards() {
    return (
        <div className="flex flex-col justify-between max-sm:justify-start">
            <div className=" rounded-lg shadow-lg flex flex-col p-2 bg-emerald-600 dark:bg-emerald-900 text-white">
                <div className="flex justify-center text-3xl font-bold">Tempo</div>
                <div className="flex justify-between mt-2"><span className="text-xl font-bold">Bruto: </span><span className="text-lg bg-neutral-800 dark:bg-neutral-900 px-2 rounded-lg">1000:00:00</span></div>
                <div className="flex justify-between mt-2"><span className="text-xl font-bold">Líquido: </span><span className="text-lg bg-neutral-800 dark:bg-neutral-900 px-2 rounded-lg">1000:00:00</span></div>
                <div className="flex justify-between mt-2"><span className="text-xl font-bold">Prob.:</span><span className="text-lg bg-neutral-800 dark:bg-neutral-900 px-2 rounded-lg">1000:00:00</span></div>
            </div>
            <CardInfo
                titulo="Total OS" info={123}
                icone={<FilterNoneIcon fontSize="large" />}
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
            />
            <CardInfo
                titulo="Total Servico" info={246}
                icone={<SettingsSuggestIcon fontSize="large" />}
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
            />
            <CardInfo
                titulo="Limpeza" info={246}
                icone={<CleaningServicesIcon fontSize="large" />}
                className="bg-red-700 dark:bg-red-900 boder-red-200 dark:border-red-700 text-white"
            />
        </div>
    )
}