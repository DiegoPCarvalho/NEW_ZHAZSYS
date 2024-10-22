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

interface HeaderProps {
    icone: any
    texto: string
}

export default function Header(props: HeaderProps) {
    const { altenarMenu, menu } = useAppData();
    const { get } = useLocalStorage();

    return (
        <div className="flex justify-between h-16 bg-white">
            <div className="flex items-center">
                {menu ? (
                    <>
                        <div className="ml-52">
                            <Botao className="ml-2 text-slate-200 p-2 rounded-lg hover:bg-neutral-200 " executar={altenarMenu}><MenuOpenIcon className="text-slate-900" fontSize="large"></MenuOpenIcon></Botao>
                        </div>
                        <div className={`flex items-center ml-1`}>
                            <Titulo icone={props.icone} texto={props.texto} className={""} />
                        </div>
                    </>
                ) : (
                    <>
                        <Botao className=" ml-2 text-slate-200 p-2 rounded-lg hover:bg-neutral-200" executar={altenarMenu}><MenuIcon className="text-slate-900" fontSize="large"></MenuIcon></Botao>
                        <div className={`ml-3 flex items-center justify-center`}>
                            <Image src={logo} alt="" className="h-10 w-36" />
                        </div>
                        <div className={`ml-5 flex items-center bg-white`}>
                            <Titulo icone={props.icone} texto={props.texto} className={""} />
                        </div>
                    </>
                )}
            </div>
            <div className="flex items-center mr-3">
                <div>
                    <div className="text-xs">
                        Bem Vindo,
                    </div>
                    <div className="text-sm font-bold text-black">
                        {get("usuario")}
                    </div>
                </div>
                <AvatarUser />
            </div>
        </div>
    );
}
