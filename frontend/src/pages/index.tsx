'use client'
import Layout from "@/components/template/Layout";
import { IconeHome } from "@/components/icons/Index";
import { useEffect } from "react";
import useAppData from "@/data/hook/useAppData";

export default function Home() {
    const { BuscarDadoUserAcesso } = useAppData()

    useEffect(() => {
        BuscarDadoUserAcesso!()
    }, [])

    return (
        <Layout icone={IconeHome} texto="Home">
            <div className="grow">
                <div className="flex">
                    <div className="flex flex-col border grow">
                        <div>
                            Cards
                        </div>
                        <div>
                            Grafico
                        </div>
                    </div>
                    <div className="border">
                        grafico
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col border">
                        <div>Sistemas</div>
                        <div>setores</div>
                    </div>
                    <div className="grow border">
                        grafico
                    </div>
                    <div className="border">
                        ramais
                    </div>
                </div>
            </div>
        </Layout>
    );
}