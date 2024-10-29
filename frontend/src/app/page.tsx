'use client'
import { AppProvider } from "@/data/context/AppContext";
import Layout from "@/components/template/Layout";
import { IconeHome } from "@/components/icons/Index";

export default function Home() {

    return (
        <AppProvider>
            <Layout icone={IconeHome} texto="Home">
                <div className="container">
                    Content
                </div>
            </Layout>
        </AppProvider>
    );
}