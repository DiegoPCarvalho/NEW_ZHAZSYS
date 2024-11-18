interface NavigateMiniPageProps {
    children?: any
}

export default function NavigateMiniPage(props: NavigateMiniPageProps){
    return(
        <div className="shadow-md group relative p-2 bg-emerald-600 dark:bg-emerald-900 rounded-full hover:bg-emerald-500 dark:hover:bg-emerald-700">
            {props.children}
        </div>
    )
}