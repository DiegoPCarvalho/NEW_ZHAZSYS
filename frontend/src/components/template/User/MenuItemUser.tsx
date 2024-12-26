import Link from "next/link"
import useAppData from "@/data/hook/useAppData";

interface MenuItemUserProps {
    texto: string
    icone: any
    url?: string
    className?: string
    sair?: () => void
    executar?: (evento: any) => void
}

export default function MenuItemUser(props: MenuItemUserProps){
    const { altenarAvatarUser } = useAppData()
    
    function rendLink() {
        return (
            <a className={`
                flex flex-row items-center px-2
                w-full h-14 ${props.className} 
                text-neutral-800 dark:text-neutral-200
            `} onClick={props.sair}>
                {props.icone}
                <span className="text-sm font-bold ml-2">
                    {props.texto}
                </span>
            </a>
        )
    }
    
    return(
        <div onClick={altenarAvatarUser}><li onClick={props.executar} className={`
            cursor-pointer
            hover:rounded
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