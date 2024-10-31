import Content from './content/Index';
import Header from './header/Index';
import useAppData from '@/data/hook/useAppData';
import Menu from './menu';
import MenuUser from './User/MenuUser';
import './layout.css';

interface LayoutProps {
    children?: any
    icone: any
    texto: string
}

export default function Layout(props: LayoutProps) {
    const { menu, avaUser, tema } = useAppData()
    
    return (
            <div className={`${tema} flex flex-row h-screen w-screen`}>
                <div className={`
                flex w-52 bg-neutral-700
                dark:bg-neutral-900
                fixed left-0 top-0 z-9999
                h-screen overflow-y-hidden
                duration-300 ease-linear
                ${menu ? "translate-x-0" : "-translate-x-full"}
           `}>

                    <Menu />
                </div>
                <div className={`
                flex flex-col bg-neutral-100 w-full h-screen dark:bg-neutral-600   
                
            `}>
                    <div className={`
                 shadow-lg shadow-neutral-200 dark:shadow-md dark:shadow-neutral-800
                `}>
                        <Header icone={props.icone} texto={props.texto} />
                    </div>
                    <div className='flex flex-row h-full w-full overflow-auto' id="hiddenScroll">
                        {menu ? (
                            <div className='flex lg:w-60 md:w-72'>

                            </div>
                        ) : false}
                        <Content>{props.children}</Content>
                    </div>
                </div>
                <div className={`
                flex w-28 bg-white mt-1
                dark: dark:bg-neutral-900
                fixed right-0 top-16 z-9999
                overflow-y-hidden h-28
                duration-300 ease-linear
                rounded-md
                shadow-md shadow-neutral-400
                dark:shadow-none
                ${avaUser ? "translate-x-0" : "translate-x-full"}
           `}>
                    <MenuUser />
                </div>
            </div>
    )
}