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
            <div className="container">
                Content
            </div>
        </Layout>
    );
}