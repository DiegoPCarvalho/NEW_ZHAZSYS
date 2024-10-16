
import { IconeDev } from './../icons/Index';
import useLocalStorage from '@/data/hook/useLocalStarage';

export default function Footer() {
    const { get } = useLocalStorage()

    return (
        <footer className=" flex justify-between items-center text-gray-300 p-2 bg-gradient-to-r from-green-700 to-sky-700 w-full">
            <div className='flex'>
                <h5 className='flex'>
                    <span className='mr-1'>Bem Vindo ao ZhazSys</span>
                     <span className='font-bold'>{get("usuario")}</span>
                </h5>
            </div>
            <div className='flex'>
                Desenvolvido para guardar <i className='mx-1'> {IconeDev} </i> por
                <strong><span className="text-black ml-1">DC</span><span className='text-red-700'>7</span></strong>
            </div>
        </footer>
    );
}