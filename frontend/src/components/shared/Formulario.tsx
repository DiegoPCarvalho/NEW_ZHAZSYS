interface FormularioProps {
    children?: any
}

export default function Formulario(props: FormularioProps){
    return(
        <form className="flex flex-col m-5" action="javascript:myFunction(); return false;">
            {props.children}
        </form>
    )
}