interface AuthInputProps{
    id?: string
    valor?: any
    tipo?: string
    erro?: boolean
    msg?: string
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    onChange?: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando ? null : (
        <div className="">
            <input 
                id={props.id}
                type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.onChange!(e.target.value)}
                required={props.obrigatorio}
                className={`
                     bg-neutral-800 py-4 px-2 bg-opacity-50
                     outline-none w-[280px] 
                     hover:bg-neutral-900 hover:bg-opacity-50
                     ${props.erro ? "text-red-500" : "text-white"}
                `}
                placeholder={props.msg}
            />
        </div>
    )
}