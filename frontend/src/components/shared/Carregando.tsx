import CircularProgress from '@mui/material/CircularProgress';

interface CarregandoProps {
    cor: 'success' | 'secondary' | 'inherit'
    tamanho: number
}

export default function Carregando(props: CarregandoProps){
    return <CircularProgress color={props.cor} size={props.tamanho}/>
}