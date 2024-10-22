
import MenuItem from "./MenuItem";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";

import AddchartIcon from '@mui/icons-material/Addchart';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import DriveFileMoveSharpIcon from '@mui/icons-material/DriveFileMoveSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';


export default function Menu() {
  
    function renderMenu() {
        return (
            <ul className="">
                <MenuItem url="/" texto="Gerência" icone={<AddchartIcon/>} />
                <MenuItem url="/" texto="Laboratório" icone={<QrCode2SharpIcon />} />
                <MenuItem url="/" texto="VHL" icone={<ShoppingCartSharpIcon />} />
            </ul>
        )
    }

    function renderOuther(){
        return (
            <ul>
                <MenuItem url="/" texto="Contrato" icone={<DriveFileMoveSharpIcon />} />
            </ul>
        )
    }

    function renderSettings(){
        return(
            <ul>
                <MenuItem url="/" texto="Perfil" icone={<PersonAddAltOutlinedIcon />} />
            </ul>
        )
    }

    return (
        <div className="flex flex-col m-2">
            <div className="flex justify-center w-full mb-3">
                <Image src={logo} alt="" className="h-12 w-48" />
            </div>
            <div className="mt-3 ml-5 text-xs font-extrabold text-gray-400">MENU</div>
            <div className="ml-3">
                {renderMenu()}
            </div>
            <div className="mt-8 ml-5 text-xs font-extrabold text-gray-400">OUTHERS</div>
            <div className="ml-3">
                {renderOuther()}
            </div>
            <div className="mt-8 ml-5 text-xs font-extrabold text-gray-400">SETTINGS</div>
            <div className="ml-3">
                {renderSettings()}
            </div>     
        </div>
    )
}