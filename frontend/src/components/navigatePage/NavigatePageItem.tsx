import Link from "next/link";
import Tooltip from "../shared/tooltip";

interface NavigatePageItemProps {
    nome: string
    icone: any
    url: string
}

export default function NavigatePageItem(props: NavigatePageItemProps) {
    return (
        <Link href={props.url} legacyBehavior>
            <div className="mx-1">
                <Tooltip nome={props.nome}>
                    <div className="cursor-pointer p-1 rounded-full text-neutral-50 dark:text-neutral-100  hover:text-neutral-100">
                        <props.icone sx={{ fontSize: 40 }} />
                    </div>
                </Tooltip>
            </div>
        </Link>
    )
}
