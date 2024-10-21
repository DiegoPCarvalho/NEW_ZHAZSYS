import { IconeContrato, IconeGerente, IconeLab, IconeVHL } from "@/components/icons/Index";
import useAppData from "@/data/hook/useAppData";
import MenuItem from "./MenuItem";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";
import { Divider } from "@mui/material";
import UserMenu from "../User/UserMenu";

export default function Menu() {
    const { menu, altenarTema } = useAppData();

    function renderMenu() {
        return (
            <ul className="">
                <MenuItem url="/" texto="Gerência" icone={IconeGerente} />
                <MenuItem url="/" texto="Laboratório" icone={IconeLab} />
                <MenuItem url="/" texto="Contrato" icone={IconeContrato} />
                <MenuItem url="/" texto="VHL" icone={IconeVHL} />
            </ul>
        )
    }

    return (
        <div className="flex flex-col m-2">
            <div className="mt-2 flex justify-center w-full mb-3">
                <Image src={logo} alt="" className="h-12 w-64" />
            </div>
            <div className="border-b-zinc-600 border-transparent border-b"></div>
            <div className="my-7 flex justify-center">
               <UserMenu />
            </div>
            
        </div>
    )
}