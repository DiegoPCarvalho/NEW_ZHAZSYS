import { IconeHome, IconeMenuAberto, IconeMenuFechado } from "@/components/icons/Index";
import Titulo from "./Titulo";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";
import Botao from "@/components/shared/Botao";
import useAppData from "@/data/hook/useAppData";
import AvatarUser from "../User/AvatarUser";

interface HeaderProps {
    icone: any
    texto: string
}

export default function Header(props: HeaderProps) {
    const { altenarTema, menu } = useAppData();

    return (
        <div className={`flex bg-neutral-700 box-border shadow-lg h-12`}>
            <div className="hover:bg-neutral-600 flex items-center w-10 justify-center">
                <Botao className="text-gray-300" executar={altenarTema}>{ menu ? IconeMenuAberto : IconeMenuFechado}</Botao>
            </div>
            <div className="mr-4 flex items-center justify-center">
                <Image src={logo} alt="" className="h-10 w-36"/>
            </div>
            <div className="flex grow justify-between">
                <div className="mr-3 flex items-center">
                    <Titulo icone={props.icone} texto={props.texto}/>
                </div>
                <div className="mr-3 flex items-center">
                    <AvatarUser />
                </div>
            </div>
        </div>
    );
}