import LogoutIcon from '@mui/icons-material/Logout';
import MenuItemUser from "./MenuItemUser";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import useAuthData from '@/data/hook/useAuthData';

export default function MenuUser(){
    const {logout} = useAuthData()
    return (
            <ul className='w-full'>
                <MenuItemUser icone={<ManageAccountsIcon />} url='/Perfil' texto="Perfil" className="hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:rounded hover:font-bold"/>
                <MenuItemUser sair={logout} icone={(<LogoutIcon />)} texto="Sair"  className="hover:bg-red-400 dark:hover:bg-red-600 hover:rounded hover:font-bold hover:text-white"/>
            </ul>
    )
}