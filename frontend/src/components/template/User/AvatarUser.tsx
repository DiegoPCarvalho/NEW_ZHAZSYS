import Image from 'next/image';
import avatar from '@/assets/pic/avatar.png';
import useAppData from "@/data/hook/useAppData";

export default function AvatarUser() {
  
    const { altenarAvatarUser, perfilUser } = useAppData();

    return (
        <div className="mr-2 ml-3 cursor-pointer" onClick={altenarAvatarUser}>
           {perfilUser.fotoUrl === "" ?
                <Image src={avatar} alt="" className="w-10 h-10" />
                : <img src={perfilUser.fotoUrl} alt="" className="w-10 h-10" />
        } 
        </div>
    )
}