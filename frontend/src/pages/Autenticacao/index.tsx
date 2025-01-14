import { useEffect, useState } from "react"
import AutenticacaoMain from "./AutenticacaoMain";
import axios from "axios"
import { BancoApiLocal } from "@/data/database/bancoApiLocal";

export default function LoginMain() {

    const [img, setImg] = useState<string>();
    const baseUrl = BancoApiLocal("imagemLogin");

    async function buscarFoto() {
        const imagem = await axios(baseUrl)
            .then(resp => resp.data)
            .then(dado => dado.images)
            .then(img => img?.map((registro: any) => {return registro.url}))

                

        const final = imagem === undefined ? "https://www.bing.com/th?id=OHR.CadizSpain_PT-BR3104311078_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" : "https://www.bing.com" + imagem[0]

        setImg(final)
    }

    useEffect(() => {
        buscarFoto()
    }, [])


    return (
        <div className="flex">
            <img src={img} alt="" className="h-screen w-full"/>
            <div className=" h-screen w-screen
            fixed 
            bg-neutral-950 bg-opacity-65
            ">
                <AutenticacaoMain />
            </div>
        </div>
    )
}