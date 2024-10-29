import Link from "next/link"

interface MenuDropDownItemProps {
    icone: any
    texto: string
    url?: string
    executar?: () => void
}

export default function MenuDropDownItem(props: MenuDropDownItemProps) {

    function renderLink(){
        return (
            <a className="p-2 flex items-center">
                <div className="ml-3 mr-2">{props.icone}</div>
                <div className="text-sm">{props.texto}</div>
            </a>
        )
    }
    
    return (
            <div className="
            flex items-center mt-3 mx-3 text-neutral-200
            hover:bg-netural-500
            hover:bg-neutral-500
            dark:hover:bg-neutral-700
            hover:rounded
            " onClick={props.executar}>
            {props.url ? (
                <Link href={props.url} legacyBehavior>
                    {renderLink()}
                </Link>
            ) : renderLink()}
            </div>
    )
}