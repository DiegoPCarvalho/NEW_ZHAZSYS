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
        <div className={`flex bg-neutral-700 h-16`}>
            <div className="hover:bg-neutral-600 flex items-center w-10 justify-center">
                <Botao className="text-gray-200" executar={altenarTema}>{ menu ? IconeMenuAberto : IconeMenuFechado}</Botao>
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


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//   );
// }
// export default Header;
