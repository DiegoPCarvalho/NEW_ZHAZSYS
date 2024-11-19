"use client"
import Titulo from "./Titulo";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";
import Botao from "@/components/shared/Botao";
import useAppData from "@/data/hook/useAppData";
import AvatarUser from "../User/AvatarUser";
import MenuIcon from '@mui/icons-material/Menu';
import MudarTema from "./MudarTema"
import MudarTemaMini from "./MudarTemaMini";
import useLocalStorage from "@/data/hook/useLocalStorage";


interface HeaderProps {
    icone: any
    texto: string
}

export default function Header(props: HeaderProps) {
    const { altenarMenu, menu } = useAppData();
    const { get } = useLocalStorage();

    return (
        <div className="flex justify-between h-16 bg-white dark:bg-zinc-950">
            <div className="flex items-center">
                {menu ? (
                    <>
                        <div className={`flex items-center ml-56 max-sm:ml-52`}>
                            <Titulo icone={props.icone} texto={props.texto} className={"dark:text-zinc-200"} />
                        </div>
                    </>
                ) : (
                    <>
                        <Botao className=" ml-2 p-2 rounded-lg hover:bg-zinc-700 hover:text-zinc-200 dark:hover:bg-zinc-700 dark:text-zinc-200 " executar={altenarMenu}><MenuIcon fontSize="large"></MenuIcon></Botao>
                        <div className={`ml-3 flex items-center justify-center`}>
                            <Image src={logo} alt="" className="h-10 w-36 max-sm:w-20" />
                        </div>
                        <div className={`ml-5 flex items-center`}>
                            <Titulo icone={props.icone} texto={props.texto} className={""} />
                        </div>
                    </>
                )}
            </div>
            <div>
                
            </div>
            <div className="flex items-center mr-3">
                <div className="mr-10 max-sm:hidden">
                   <MudarTema />
                </div>
                <div className="sm:hidden mr-3">
                   <MudarTemaMini />
                </div>
                <div className="max-sm:hidden">
                    <div className="text-xs dark:text-zinc-200 text-black">
                        Bem Vindo,
                    </div>
                    <div className="text-sm font-bold text-black dark:text-zinc-200">
                        {get("usuario")}
                    </div>
                </div>
                <AvatarUser />
            </div>
        </div>
    );
}
