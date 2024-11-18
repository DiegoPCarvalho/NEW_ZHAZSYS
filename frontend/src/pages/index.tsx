'use client'
import Layout from "@/components/template/Layout";
import { IconeHome } from "@/components/icons/Index";

export default function Home() {

    return (
        <Layout icone={IconeHome} texto="Home">
            <div className="container">
                Content
            </div>
        </Layout>
    );
}