interface MenuDropDownItemProps {
    icone: any
    texto: string
}

export default function MenuDropDownItem(props: MenuDropDownItemProps) {
    return (
        <div className="
            flex mt-3 mx-3 text-neutral-200
            hover:bg-netural-500
            hover:bg-neutral-500
            dark:hover:bg-neutral-700
            hover:rounded
            ">
            <div className="p-2 flex">
            <div className="ml-3 mr-2">{props.icone}</div>
            <div>{props.texto}</div>
            </div>
        </div>
    )
}