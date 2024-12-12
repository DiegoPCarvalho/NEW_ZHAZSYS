import NavigateMiniPage from './NavigateMiniPage';
import NavigatePageItem from './NavigatePageItem';

interface NavigatePageProps {
    titulo: string
    iconeTitulo: any
    centroTela?: any
    data: any[]
    dataMini: any[]
    excecao?: boolean
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
        <div className="flex flex-row justify-between items-center h-24">
            <div className="flex items-center ml-3">
                <div className="mr-2">{props.iconeTitulo}</div>
                <div className="text-3xl max-md:text-xl text-neutral-800 font-extrabold dark:text-neutral-200 max-sm:hidden">{props.titulo}</div>
            </div>
            <div className=''>
                {props.centroTela}
            </div>
            <div className={`sm:hidden flex items-center ${props.excecao ? "w-[145px]" : "w-[105px]"}  h-[70px]`}>
                <NavigateMiniPage dado={props.dataMini} tituloMini={props.titulo}/>
            </div>
            <div className="flex justify-end max-sm:hidden mr-3">
                <div className="flex justify-between items-center">
                    {renderNavItem()}
                </div>
            </div>
        </div>
    )
}