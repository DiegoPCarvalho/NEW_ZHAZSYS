import Link from "next/link";

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    executar?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function rendLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                w-20 h-20  ${props.className} 
              hover:text-white text-neutral-300
            `}>
                {props.icone}
                <span className="text-xs font-light">
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.executar} className={`
           hover:bg-neutral-500
           cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url} legacyBehavior>
                    {rendLink()}
                </Link>
            ) : (
                rendLink()
           )}
        </li>
    )
}

