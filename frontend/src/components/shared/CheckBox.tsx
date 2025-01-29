import { EntradaProps } from "@/data/interfaces/interfaceCampos";

export default function CheckBox(props: EntradaProps){
    return(
            <input
                id={props.id}
                type="checkbox"
                name={props.nome}
                className="h-5 w-5"
                value={props.valor}
            />
    )
}