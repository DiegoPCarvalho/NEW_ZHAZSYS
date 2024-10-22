import Footer from './footer/Index';
import Content from './content/Index';
import Header from './header/Index';
import useAppData from '@/data/hook/useAppData';
import Menu from './menu';



interface LayoutProps {
    children?: any
    icone: any
    texto: string
}

export default function Layout(props: LayoutProps) {
    const { menu, altenarTema } = useAppData()

    return (
        <div className='flex flex-row h-screen w-screen'>
            <div className={`
                flex w-52 bg-neutral-800
                fixed left-0 top-0 z-9999
                h-screen overflow-y-hidden
                duration-300 ease-linear
                ${menu ? "translate-x-0" : "-translate-x-full"}
           `}>

                <Menu />
            </div>
            <div className={`
                flex flex-col bg-neutral-100 w-full h-screen   
            `}>
                <div className={`
                 shadow-2xl shadow-slate-200
                `}>
                    <Header icone={props.icone} texto={props.texto} />
                </div>
                <div className='stick'>
                    context
                </div>
            </div>
        </div>
    )
}