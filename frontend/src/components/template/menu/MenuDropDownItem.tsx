import useAppData from "@/data/hook/useAppData"

interface MenuDropDownItemProps {
    icone: any
    texto: string
    executar?: () => void
}

export default function MenuDropDownItem(props: MenuDropDownItemProps) {
    const { altenarMenu } = useAppData()

    return (
        <div className="
            flex items-center mt-3 mx-3 text-neutral-200
            hover:bg-netural-500
            hover:bg-neutral-500
            dark:hover:bg-neutral-700
            hover:rounded
            " onClick={props.executar}>
            <div className="p-2 flex items-center">
            <div className="ml-3 mr-2">{props.icone}</div>
            <div className="text-sm">{props.texto}</div>
            </div>
        </div>
    )
}