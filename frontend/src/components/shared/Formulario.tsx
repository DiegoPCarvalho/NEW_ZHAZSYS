interface FormularioProps {
    children?: any
    className?: string
}

export default function Formulario(props: FormularioProps){
    return(
        <form id="hiddenScroll" className={`flex flex-col m-5 ${props.className}`} action="javascript:myFunction(); return false;">
            {props.children}
        </form>
    )
}