import Footer from './footer/Index';
import Content from './content/Index';
import Header from './header/Index';

export default function Layout() {
    return (
        <div className='flex flex-col h-screen w-screen'>
            <Header />
            <div className={`flex grow w-full`}>
                <Content />
            </div>
            <div className={`flex w-full`}>
                <Footer />
            </div>
        </div>
    )
}