import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/assets/pic/avatar.png'
import { useState } from 'react';
import { IconButton, Menu, Typography } from '@mui/material';
import { IconePerfil, IconeSair } from '@/components/icons/Index';

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUser(props: AvatarUsuarioProps) {
    const [menuUser, setMenuUser] = useState<null | HTMLElement>(null);

    const openMenuUser = (event: React.MouseEvent<HTMLElement>) => {
        setMenuUser(event.currentTarget);
    };

    const closeMenuUser = () => {
        setMenuUser(null);
    };

    return (
        <>
            <IconButton onClick={openMenuUser} sx={{ p: 0 }}>
                <Image
                    src={avatar}
                    alt="Avatar do Usuario"
                    className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
                ></Image>
            </IconButton>
            <Menu
                sx={{ mt: '35px' }}
                anchorEl={menuUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(menuUser)}
                onClose={closeMenuUser}
            >
                <div className="flex p-2 cursor-pointer hover:bg-neutral-100" onClick={closeMenuUser}>
                    <span className='mr-2'>{IconePerfil}</span><Typography className='font-bold text-lg'>Perfil</Typography>
                </div>
                <div className="flex p-2 cursor-pointer hover:bg-red-100" onClick={closeMenuUser}>
                    <span className='mr-2 text-red-600 rotate-180'>{IconeSair}</span><Typography className='font-bold text-lg'>Sair</Typography>
                </div>
        </Menu >
        </>
    )
}