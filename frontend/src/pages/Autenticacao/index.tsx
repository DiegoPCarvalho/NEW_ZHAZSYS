import { useEffect, useState } from "react"
import AutenticacaoMain from "./AutenticacaoMain";
import axios from "axios"

export default function LoginMain() {

    const [img, setImg] = useState<string>();

    async function buscarFoto() {
        const dado = await axios("http://localhost:3000/api/imagemLogin")
            .then(resp => resp.data)
            .then(dado => dado.images)
            .then(img => img.map((registro: any) => {
                return registro.url
            }))

        const final = "https://www.bing.com" + dado[0]

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