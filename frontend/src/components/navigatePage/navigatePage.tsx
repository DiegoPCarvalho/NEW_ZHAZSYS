import { IconSetaDown } from "../icons/IconesMaterial"

interface NavigatePageProps {
    titulo?: string
    iconeTitulo?: any
}

export default function NavigatePage(props: NavigatePageProps){
    return(
        <div className=" flex justify-between">
            <div className="flex items-center mt-3">
                    <div className="">{props.iconeTitulo}</div>
                    <div className="text-3xl text-neutral-800 font-extrabold dark:text-neutral-200">{props.titulo}</div>
            </div>
            <div>
                    navigator
            </div>
        </div>
    )
}