import { IconeHome, IconeMenuFechado } from "@/components/icons/Index";
import Titulo from "./Titulo";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";
import Botao from "@/components/shared/Botao";


export default function Header() {
    return (
        <div className={`flex bg-neutral-700 box-border shadow-lg h-12`}>
            <div className="hover:bg-neutral-600 flex items-center w-10 justify-center">
                <Botao className="text-gray-300">{IconeMenuFechado}</Botao>
            </div>
            <div className="mr-4 flex items-center justify-center">
                <Image src={logo} alt="" className="h-10 w-36"/>
            </div>
            <div className="flex grow justify-between">
                <div className="mr-3 flex items-center">
                    <Titulo icone={IconeHome} texto="Home"/>
                </div>
                <div className="mr-3">
                    USER
                </div>
            </div>
        </div>
    );
}