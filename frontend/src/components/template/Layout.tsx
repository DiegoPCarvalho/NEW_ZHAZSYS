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
    const { menu } = useAppData()

    return (
        <div className='flex flex-col h-screen w-screen'>
            <Header  icone={props.icone} texto={props.texto}/>
            <div className="flex flex-row grow shadow-lg">
                {menu ? (
                    <div className="w-20 bg-neutral-700">
                        <Menu />
                    </div>
                ) : false}
                <div className={`flex grow w-full p-3 bg-neutral-300 shadow-sm`}>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className={`flex w-full`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}