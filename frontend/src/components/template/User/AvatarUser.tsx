import Image from 'next/image';
import avatar from '@/assets/pic/avatar.png';
import useAppData from "@/data/hook/useAppData";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUser(props: AvatarUsuarioProps) {
  
    const { altenarAvatarUser } = useAppData();

    return (
        <div className="mr-2 ml-3 cursor-pointer" onClick={altenarAvatarUser}>
            <Image src={avatar} alt="" className="w-10 h-10" />
        </div>
    )
}