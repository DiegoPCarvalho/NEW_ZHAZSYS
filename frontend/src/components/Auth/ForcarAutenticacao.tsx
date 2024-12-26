import Head from "next/head"
import Image from "next/image"
import loading from "@/assets/gifs/carregar.gif";

export default function ForcarAutenticacao({children} : any){
    function renderizarConteudo(){
        return(
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html:`
                        if(!document.cookie?.includes("admin-template-auth")){
                            window.location.href="/Autenticacao"
                        }
                    `
                }}/>
            </Head>
                {children}
            </>

        )
    }
    function renderizarCarregando(){
        return(
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <span className="text-white">.</span>
                <Image src={loading} alt="" />
            </div>
        )
    }

    return renderizarConteudo()
}