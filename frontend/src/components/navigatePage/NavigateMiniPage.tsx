import Link from "next/link"

interface NavigateMiniPageProps {
    children?: any
    dado?: any[]
    tituloMini: string
}

export default function NavigateMiniPage(props: NavigateMiniPageProps) {
    return (
        <div className='flex flex-wrap justify-between'>
            {props.dado?.map((registro: any) => {
                return registro.nome !== props.tituloMini ?
                    (
                        <Link href={registro.url} legacyBehavior>
                            <div className="mb-1 hover:bg-emerald-500 dark:hover:bg-emerald-700 bg-emerald-600 dark:bg-emerald-900 cursor-pointer p-2 rounded-full text-neutral-50 dark:text-neutral-100  hover:text-neutral-100">
                                <registro.icone sx={{ fontSize: 30 }} />
                            </div>
                        </Link>
                    ) : false
            })}
        </div>
    )
}