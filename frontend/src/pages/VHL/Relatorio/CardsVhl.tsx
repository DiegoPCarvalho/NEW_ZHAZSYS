import CardInfo from "@/components/Contrato/CardInfo";
import StorefrontIcon from '@mui/icons-material/Storefront';

interface CardsVhlProps {
    pedido: number
    QTDE: number
}

export default function CardsVhl(props: CardsVhlProps){
    return (
        <div className="flex flex-col justify-between max-sm:grid max-sm:grid-cols-1 max-sm:w-[100%]">
            <CardInfo 
                titulo="T. Pedido" info={props.pedido} 
                icone={<StorefrontIcon fontSize="large"/>} 
                className="bg-stone-700 dark:bg-stone-800 boder-stone-200 dark:border-stone-700 text-white"
            />
            <CardInfo 
                titulo="T. Equip." info={props.QTDE} 
                icone={<StorefrontIcon fontSize="large"/>} 
                className="bg-slate-600 dark:bg-slate-700 boder-slate-200 dark:border-slate-700 text-white"
            />
        </div>
    )
}