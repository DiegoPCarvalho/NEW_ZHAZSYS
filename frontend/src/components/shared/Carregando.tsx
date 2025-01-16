import CircularProgress from '@mui/material/CircularProgress';

interface CarregandoProps {
    cor: 'success' | 'secondary' | 'inherit'
    tamanho: number
    grafico?: boolean
}

export default function Carregando(props: CarregandoProps){
    return (
    <div className='flex flex-col items-center'>
        <CircularProgress color={props.cor} size={props.tamanho}/>
        {props.grafico ? <span className='mt-20 dark:text-neutral-200 font-bold text-xl'>Carregando Dados...</span> : false}
    </div>
)
}