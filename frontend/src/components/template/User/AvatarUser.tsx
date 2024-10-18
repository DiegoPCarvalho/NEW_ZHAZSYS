import Link from 'next/link';
import Image from 'next/image';
import avatar from "@/assets/img/avatar.svg"

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUser(props: AvatarUsuarioProps) {
    return (
        <div>
            <Image
                src={avatar}
                alt="Avatar do Usuario"
                className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
            ></Image>
        </div>
    )
}