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
            <img src={img} alt="" className="h-screen w-full"/>
            <div className=" h-screen w-screen
            fixed 
            bg-neutral-950 bg-opacity-65
            ">
                <LoginForm />
            </div>
        </div>
    )
}

// top-[200px] left-[650px] 
//             max-xl:top-[100px] max-xl:left-[450px] 
//             max-lg:left-[300px]
//             max-md:left-[200px]
//             max-sm:left-[30px]