import Footer from "../footer/Index"

interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps){
    return (
        <div className="flex h-full flex-col w-full">
            <main className="grow">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}