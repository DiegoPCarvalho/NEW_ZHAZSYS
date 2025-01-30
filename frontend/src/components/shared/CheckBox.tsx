import { EntradaProps } from "@/data/interfaces/interfaceCampos";
import { useState } from "react";

export default function CheckBox(props: EntradaProps){
    const [check, setCheck] = useState<boolean>(false)

    function mudarEstagio(event: any){
        setCheck(!check)
    }

    return(
            <input
                id={props.id}
                type="checkbox"
                name={props.nome}
                className="h-5 w-5"
                value={props.valor}
                onChange={e => mudarEstagio(e.target.checked)}
                checked={check}
            />
    )
}