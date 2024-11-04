import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

interface NavigatePageItemProps {
    nome: string
    icone: any
    url: string
}

export default function NavigatePageItem(props: NavigatePageItemProps){
    return(
        <div className="mx-1">
            <Link href={props.url} legacyBehavior>
                <Tooltip title={props.nome} arrow  TransitionComponent={Fade}>
                    <div className="p1 cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-900 p-1 rounded-full text-neutral-900 dark:text-neutral-200  hover:text-neutral-200">
                        <props.icone sx={{ fontSize: 40 }}/>
                    </div>
                </Tooltip>
            </Link>
        </div>
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