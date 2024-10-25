import { IconeHome } from "@/components/icons/Index";
import Layout from "@/components/template/Layout";

export default function HomePage(){
    return(
        <Layout icone={IconeHome} texto="Home">
                <div className="container">
                    Content
                </div>
        </Layout>
    )
}