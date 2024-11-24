import Image, { StaticImageData } from "next/image";
import avatar from "@/assets/pic/avatar.png"
import Logo from '@/assets/img/logoZhaz.png';
import Botao from "@/components/shared/Botao";
import { IconDepartamento, IconUser, IconEmail, IconEspecialidade } from "@/components/icons/IconesMaterial";
import { useState} from 'react'

export default function FotoPerfil() {
    const [imagem, setImagem] = useState<StaticImageData>(avatar);

    return (
        <div className="flex flex-row-reverse justify-center m-4 max-lg:h-[90%] w-[100%] h-56 bg-white dark:bg-neutral-950 rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center w-[40%] max-lg:w-[100%]">
                <Image width={100} height={100} src={imagem} alt="" className="w-[90%] shadow-lg rounded-full" />
                <div className="h-10 mt-3">
                    <Botao className={`
                    transition-all bg-yellow-500  text-white px-3 py-2 rounded-lg
                    border-yellow-600
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
                `}
                    executar={() => setImagem(Logo)}
                >
                        Alterar
                    </Botao>
                </div>
            </div>
            <div className="flex flex-col justify-center w-[60%] ml-3 ">
                <div className="flex flex-col">
                    <div className="text-sm dark:text-neutral-200">
                        <span className="font-bold mr-1"><IconUser />:</span>Diego Carvalho
                    </div>
                    <div className="text-sm mt-2 dark:text-neutral-200">
                        <span className="font-bold mr-1"><IconDepartamento />:</span>Laboratório
                    </div>
                    <div className="text-sm mt-2 dark:text-neutral-200">
                        <span className="font-bold mr-1"><IconEmail />:</span>diego.carvalho@zhaz.com.br
                    </div>
                    <div className="text-sm mt-2 dark:text-neutral-200">
                        <span className="font-bold mr-1"><IconEspecialidade />:</span>Coletor de Dados
                    </div>
                </div>
            </div>
        </div>
    )
}