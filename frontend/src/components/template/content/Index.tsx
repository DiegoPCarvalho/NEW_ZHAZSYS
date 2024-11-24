import useAppData from "@/data/hook/useAppData"
import Footer from "../footer/Index"

interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps){
    const { menu, avaUser, tema } = useAppData()

    return (
        <div className="flex h-full flex-col w-full">
            <main className={`grow mb-5 ${menu ? "lg:ml-56" : ""}`}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}