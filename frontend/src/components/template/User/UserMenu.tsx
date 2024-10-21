import { AccordionDetails, AccordionSummary, IconButton } from "@mui/material";
import avatar from '@/assets/pic/avatar.png'
import Image from "next/image";
import useLocalStorage from "@/data/hook/useLocalStarage";
import { Accordion } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface UserMenuProps {
    className?: string
}

export default function UserMenu(props: UserMenuProps) {
    const { get } = useLocalStorage()

    return (
        <div className="flex justify-everly">
            {/* <div className="">
                <IconButton sx={{ p: 0 }} className="mx-2">
                    <Image
                        src={avatar}
                        alt="Avatar do Usuario"
                        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
                    ></Image>
                </IconButton>
            </div>
            <div className="font-extrabold text-lg flex ml-2 items-center text-neutral-300">
                {get("usuario")}
            </div> */}
            <Accordion className="bg-zinc-800">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <IconButton sx={{ p: 0 }} className="mx-2">
                    <Image
                        src={avatar}
                        alt="Avatar do Usuario"
                        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
                    ></Image>
                </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}