import Titulo from "./Titulo";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";
import Botao from "@/components/shared/Botao";
import useAppData from "@/data/hook/useAppData";
import AvatarUser from "../User/AvatarUser";
import useLocalStorage from "@/data/hook/useLocalStarage";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import MenuIcon from '@mui/icons-material/Menu';
import MudarTema from "./MudarTema"

interface HeaderProps {
    icone: any
    texto: string
}

export default function Header(props: HeaderProps) {
    const { altenarMenu, menu, mudarTema, tema } = useAppData();
    const { get } = useLocalStorage();

    return (
        <div className="flex justify-between h-16 bg-white dark:bg-neutral-900">
            <div className="flex items-center">
                {menu ? (
                    <>
                        <div className="ml-52">
                            <Botao className="ml-2 p-2 rounded-lg hover:bg-neutral-700 hover:text-neutral-200 dark:hover:bg-neutral-700 dark:text-neutral-200" executar={altenarMenu}><MenuOpenIcon fontSize="large"></MenuOpenIcon></Botao>
                        </div>
                        <div className={`flex items-center ml-1`}>
                            <Titulo icone={props.icone} texto={props.texto} className={"dark:text-neutral-200"} />
                        </div>
                    </>
                ) : (
                    <>
                        <Botao className=" ml-2 p-2 rounded-lg hover:bg-neutral-700 hover:text-neutral-200 dark:hover:bg-neutral-700 dark:text-neutral-200" executar={altenarMenu}><MenuIcon fontSize="large"></MenuIcon></Botao>
                        <div className={`ml-3 flex items-center justify-center`}>
                            <Image src={logo} alt="" className="h-10 w-36" />
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
                <div className="mr-10">
                   <MudarTema />
                </div>
                <div>
                    <div className="text-xs dark:text-neutral-200">
                        Bem Vindo,
                    </div>
                    <div className="text-sm font-bold text-black dark:text-neutral-200">
                        {get("usuario")}
                    </div>
                </div>
                <AvatarUser />
            </div>
        </div>
    );
}
