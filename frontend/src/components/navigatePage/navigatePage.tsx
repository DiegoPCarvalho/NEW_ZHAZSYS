import NavigateMiniPage from './NavigateMiniPage';
import NavigatePageItem from './NavigatePageItem';
import WidgetsIcon from '@mui/icons-material/Widgets';

interface NavigatePageProps {
    titulo: string
    iconeTitulo: any
    centroTela?: any
    data: any[]
}

export default function NavigatePage(props: NavigatePageProps) {

    function renderNavItem() {
        return props.data.map((dado) => {
            if (dado.nome !== props.titulo) {
                return (
                    <span key={dado.id}>
                        <NavigatePageItem nome={dado.nome} url={dado.url} icone={dado.icone} />
                    </span>
                )
            }
        })
    }

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex items-center ml-3">
                <div className="mr-2">{props.iconeTitulo}</div>
                <div className="text-3xl max-md:text-xl text-neutral-800 font-extrabold dark:text-neutral-200">{props.titulo}</div>
            </div>
            <div className=''>
                {props.centroTela}
            </div>
            <div className='sm:hidden'>
                <NavigateMiniPage>
                    <div className="cursor-pointer p-1 rounded-full text-neutral-50 dark:text-neutral-100  hover:text-neutral-100">
                        <WidgetsIcon sx={{ fontSize: 40 }} />
                    </div>
                </NavigateMiniPage>
            </div>
            <div className="flex justify-end max-sm:hidden">
                <div className="flex justify-between items-center">
                    {renderNavItem()}
                </div>
            </div>
        </div>
    )
}