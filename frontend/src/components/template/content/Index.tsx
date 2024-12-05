import useAppData from "@/data/hook/useAppData"
import Footer from "../footer/Index"

interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps){
    const { menu, avaUser, tema } = useAppData()

    return (
        <div className="flex h-full flex-col w-full">
            <main className={`grow mb-5 ${menu ? "" : ""}`}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

// lg:ml-56