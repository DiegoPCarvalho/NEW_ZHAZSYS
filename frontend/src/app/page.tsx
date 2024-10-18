'use client'
import { IconeHome } from "@/components/icons/Index";
import Layout from "@/components/template/Layout";
import { AppProvider } from "@/data/context/AppContext";

export default function Home(){

    return(
        <AppProvider>
            <Layout icone={IconeHome} texto="Home">
                ola
            </Layout>
        </AppProvider>
    );
}