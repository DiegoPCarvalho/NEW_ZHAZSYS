import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Botao from '../shared/Botao';

interface PaginationProps {
    item?: number
    page?: number
    active?: any
    dados?: any
    previus?: any
    next?: any
    children?: any
}

export default function Pagination(props: PaginationProps) {
    
    return (
        <div className="flex justify-end items-center mt-2 ml-3">
            <div className="flex">
                <div className='max-sm:mr-3'>
                    <Botao executar={props.previus} className='max-sm:bg-emerald-700 max-sm:rounded-full max-sm:text-white hover:bg-emerald-600 hover:opacity-65 hover:rounded-full hover:text-white dark:text-white p-1'><KeyboardArrowLeftIcon /></Botao>
                </div>
                <div className='flex grow mx-3 max-sm:hidden'>
                   {props.children}
                </div>
                <div>
                    <Botao executar={props.next} className='max-sm:bg-emerald-700 max-sm:rounded-full max-sm:text-white hover:bg-emerald-600 hover:opacity-65 hover:rounded-full hover:text-white dark:text-white p-1'><KeyboardArrowLeftIcon className='rotate-180' /></Botao>
                </div>
            </div>
        </div>
    )
}