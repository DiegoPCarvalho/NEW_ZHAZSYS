import Link from "next/link"
import useAppData from "@/data/hook/useAppData";

interface MenuItemUserProps {
    texto: string
    icone: any
    url?: string
    className?: string
    executar?: (evento: any) => void
}

export default function MenuItemUser(props: MenuItemUserProps){
    const { altenarAvatarUser } = useAppData()
    
    function rendLink() {
        return (
            <a className={`
                flex flex-row items-center px-2
                w-full h-14 ${props.className} 
                text-neutral-800
            `}>
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