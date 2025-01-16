import CardInfo from "@/components/Contrato/CardInfo";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { IconVHL, IconMeta } from "@/components/icons/IconesMaterial";
import useDashData from "@/data/hook/useDashData";
import { useState } from "react";

export default function Cards() {

    const { graficoGen } = useDashData();
    const [os, setOS] = useState<boolean>(false)
    const [servico, setServico] = useState<boolean>(false)

    return (
        <div className="flex flex-col justify-between ml-2 max-sm:justify-start">
            <CardInfo
                titulo="Total VHL" info={graficoGen?.totalVhl}
                icone={<IconVHL fontSize="large" />}
                dash
                className="bg-emerald-700 dark:bg-emerald-800 boder-emerald-200 dark:border-emerald-700 text-white"
            />
            {os ? <CardInfo
                titulo="Total OS" info2={graficoGen?.totalOS} info={graficoGen?.metaOS}
                icone={<IconMeta fontSize="large" />}
                icone2={<FilterNoneIcon fontSize="large" />}
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
                click
                dash
                limpeza
                executar={() => setOS(!os)}
                />
            : <CardInfo
                titulo="Total OS" info={graficoGen?.totalOS}
                icone={<FilterNoneIcon fontSize="large" />}
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
                click
                dash
                executar={() => setOS(!os)}
                />}
            {servico ? <CardInfo
                titulo="Total Servico" info2={graficoGen?.totalServico} info={graficoGen?.metaServico}
                limpeza
                icone2={<SettingsSuggestIcon fontSize="large" />}
                icone={<IconMeta fontSize="large" />}
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
                click
                executar={() => setServico(!servico)}
            /> :
            <CardInfo
                titulo="Total Servico" info={graficoGen?.totalServico} info2={graficoGen?.totalLimpeza}
                limpeza
                icone={<SettingsSuggestIcon fontSize="large" />}
                icone2={<CleaningServicesIcon fontSize="large" />}
                className="bg-sky-700 dark:bg-sky-900 boder-sky-200 max-sm:my-2 dark:border-sky-700 text-white"
                click
                executar={() => setServico(!servico)}
            />}
            <CardInfo
                titulo="Tempo" info={graficoGen?.totalTempo}
                icone={<AccessAlarmIcon fontSize="large" />}
                className="bg-red-700 dark:bg-red-900 boder-red-200 dark:border-red-700 text-white"
                tempo
                dash
            />
        </div>
    )
}