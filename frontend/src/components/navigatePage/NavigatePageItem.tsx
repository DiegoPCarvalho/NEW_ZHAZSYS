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
                    <div className="cursor-pointer  p-1 rounded-full text-neutral-50 dark:text-neutral-100  hover:text-neutral-100">
                        <props.icone sx={{ fontSize: 40 }} />
                    </div>
                </Tooltip>
            </div>
        </Link>
    )
}



{/* <div class="group relative bg-zinc-300 p-2 rounded-full cursor-pointer">
<span>Bottom</span>
<div
  class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2"
>
  <span class="text-zinc-400 whitespace-nowrap">Info</span>
  <div
    class="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
  ></div>
</div>
</div> */}