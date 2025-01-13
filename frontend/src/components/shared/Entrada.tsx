import { EntradaProps } from "@/data/interfaces/interfaceCampos";


export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ml-2 ${props.className}`}>
            <label className="font-bold text-lg text-black dark:text-white">{props.texto}</label>
            <input
                id={props.id}
                type={props.tipo ?? 'text'}
                name={props.nome}
                value={props.valor}
                onChange={props.alterouCampo}
                onKeyDown={props.buscarPesquisa}
                disabled={props.desativar ?? false}
                className={`
                    box-border shadow-md dark:text-white
                    px-4 py-3 rounded-lg  mt-1 bg-white
                    border dark:border-zinc-800 dark:focus:border-emerald-700
                    focus:border-emerald-500 focus:bg-white
                    focus:outline-none dark:bg-neutral-700
                    max-sm:mb-2
                `}
                placeholder={props.mensagemCampo}
                required={props.requerido}
                
            />
        </div>
    )
}