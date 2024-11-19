import { useEffect, useState } from "react"
import LoginForm from "./Login";

export default function LoginMain() {

    const [img, setImg] = useState<string>();

    async function buscarFoto() {
        const dado = await fetch("http://localhost:3000/api/imagemLogin")
            .then(resp => resp.json())
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
            <img src={img} alt="" className="h-screen w-[80%] max-md:w-[60%]"/>
            <div className="bg-gray-950 w-full flex items-center justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

