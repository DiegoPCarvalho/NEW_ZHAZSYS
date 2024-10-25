import LogoutIcon from '@mui/icons-material/Logout';
import MenuItemUser from "./MenuItemUser";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function MenuUser(){
   
    
    return (
            <ul className='w-full'>
                <MenuItemUser icone={<ManageAccountsIcon />} texto="Perfil" className="hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:rounded hover:font-bold"/>
                <MenuItemUser icone={(<LogoutIcon />)} texto="Sair"  className="hover:bg-red-400 dark:hover:bg-red-600 hover:rounded hover:font-bold hover:text-white"/>
            </ul>
    )
}