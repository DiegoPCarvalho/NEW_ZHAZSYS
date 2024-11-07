import NavigatePageItem from './NavigatePageItem';

interface NavigatePageProps {
    titulo: string
    iconeTitulo: any
    data: any[]
}

export default function NavigatePage(props: NavigatePageProps){

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

    return(
        <div className="grid grid-cols-2">
            <div className="flex items-center mt-3 ml-3">
                <div className="mr-2">{props.iconeTitulo}</div>
                <div className="text-3xl text-neutral-800 font-extrabold dark:text-neutral-200 max-sm:hidden">{props.titulo}</div>
            </div>
            <div className="flex justify-end items-center mt-2">
                <div className="flex justify-between items-center">
                    {renderNavItem()}
                </div>
            </div>
        </div>
    )
}