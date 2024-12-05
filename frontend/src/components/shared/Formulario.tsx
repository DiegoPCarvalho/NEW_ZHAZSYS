interface FormularioProps {
    children?: any
    className?: string
}

export default function Formulario(props: FormularioProps){
    return(
        <form id="hiddenScroll" className={`flex flex-col ${props.className}`} action="javascript:myFunction(); return false;">
            {props.children}
        </form>
    )
}