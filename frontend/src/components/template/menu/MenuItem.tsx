import useAppData from "@/data/hook/useAppData";
import Link from "next/link";

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    executar?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    const { altenarTema } = useAppData()

    function rendLink() {
        return (
            <a className={`
                flex flex-row mt-3 items-center px-2
                w-40 h-12  ${props.className} 
              hover:text-white text-neutral-300
            `}>
                {props.icone}
                <span className="text-lg font-bold ml-2">
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <div onClick={altenarTema}><li onClick={props.executar} className={`
           hover:bg-neutral-500
           hover:rounded
           cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url} legacyBehavior>
                    {rendLink()}
                </Link>
            ) : (
                rendLink()
           )}
        </li></div>
    )
}

