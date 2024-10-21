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
           <div className={`flex w-64 bg-gray-800`}>
                <Menu />
           </div>
           <div className='flex flex-col ml bg-neutral-100 w-full'>
                <div className='h-14 bg-white shadow-lg shadow-slate-200'>header</div>
                <div className='border-t border-slate-300'>context</div>
           </div>
        </div>
    )
}



{/* <Header icone={props.icone} texto={props.texto} />
<div className="flex flex-row grow shadow-2xl">
    {menu ? (
        <div className="w-20 bg-neutral-700 shadow-xl shadow-zinc-800">
            <Menu />
        </div>
    ) : false}
    <div className={`flex grow w-full p-3 bg-neutral-100 rounded-lg`}>
        <Content>
            {props.children}
        </Content>
    </div>
</div>
<div className="flex flex-col w-full">
    <div className={`flex w-full`}>
        <Footer />
    </div>
</div> */}