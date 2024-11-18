interface BotaoProps {
    className?: string
    children?: any
    executar?: () => void
}
export default function Botao(props: BotaoProps){
    return(
        <button className={`${props.className} font-bold`} onClick={props.executar}>
            {props.children}
        </button>
    )
}