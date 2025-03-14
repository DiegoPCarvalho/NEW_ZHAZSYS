interface ModalRamalHomeProps {
    children?: any
    open?: boolean
    close?: () => void
    className?: string
}

export default function ModalRamalHome(props: ModalRamalHomeProps) {
    return (
        <>
            <div className={`
                    fixed top-0 left-0 h-screen w-screen
                    bg-neutral-900 bg-opacity-60
                    ${props.open ? "translate-x-0" : "hidden"}
                `} onClick={props.close}>  
                </div>
                <div className={`
                    bg-white overflow-y-auto
                    border-2 border-neutral-200
                    dark:border-neutral-600
                    rounded-lg p-4
                    dark:bg-neutral-950
                    fixed z-9999 ${props.className}
                    duration-300 ease-linear
                ${props.open ? "translate-x-0" : "hidden"}

                    `}>         
                    {props.children}
                </div>
        </>
    )
}