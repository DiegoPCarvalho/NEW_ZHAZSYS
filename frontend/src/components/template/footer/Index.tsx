
import { IconeBemVindo, IconeDev } from '@/components/icons/Index';

export default function Footer() {

    return (
        <footer className="flex justify-end items-center p-2 w-full">
            <div className='flex justify-end dark:text-neutral-200'>
                Copyright© Desenvolvido por
                <strong><span className="text-black dark:text-neutral-200 ml-1">DC</span><span className='text-red-700'>7</span></strong>
                <i className='mx-1 text-neutral-700 dark:text-neutral-200'>{IconeDev}</i>
            </div>
        </footer>
    );
}