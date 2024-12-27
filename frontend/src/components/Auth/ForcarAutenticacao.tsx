import Head from "next/head";
import Image from "next/image";
import loading from "@/assets/gifs/carregar.gif";
import router from "next/router";
import useAuthData from "@/data/hook/useAuthData";

export default function ForcarAutenticacao({children} : any){
    const { carregando } = useAuthData()

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

    if(carregando){
        return renderizarCarregando()
    }else{
        return renderizarConteudo()
    }
}