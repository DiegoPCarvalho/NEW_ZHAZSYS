import { EntradaProps } from "@/data/interfaces/interfaceCampos";

export default function Selecione(props: EntradaProps){
    return(
        <div className={`flex flex-col ml-2 ${props.className}`}>
            <label className="font-bold text-lg text-black dark:text-white">{props.texto}</label>
            <select
                name={props.nome}
                value={props.valor}
                disabled={props.desativar ?? false}
                onChange={props.alterouCampo}
                className={`
                    box-border shadow-md dark:text-white
                    px-4 py-3 rounded-lg  mt-1 bg-white
                    border dark:border-zinc-800 dark:focus:border-emerald-700
                    focus:border-emerald-500 focus:bg-white
                    focus:outline-none dark:bg-neutral-700  
                    max-sm:mb-2  
                `}
                required={props.requerido}
            >
                <option selected disabled={props.optionDisabled} value="">{props.filtro ? "Todos" : "..."}</option>
                {props.children}
            </select>
        </div>
    )
}