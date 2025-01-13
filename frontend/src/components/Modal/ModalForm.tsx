import { SnackbarCloseReason } from '@mui/material/Snackbar';

interface ModalFormProps {
    children?: any
    open?: boolean
    close?: () => void
    className?: string
}

export default function ModalForm(props: ModalFormProps) {
    return (
        <div className={`
                 fixed top-0 left-0 h-screen w-screen
                bg-neutral-900 bg-opacity-60
                 cursor-pointer
                 ${props.open ? "translate-x-0" : "hidden"}
            `} onClick={props.close}>  
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
        </div>
    )
}



{/* <div className={`
    bg-neutral-700 overflow-y-auto
    border-2 border-neutral-200
    dark:border-neutral-600
    rounded-lg p-4 h-screen w-screen
    dark:bg-neutral-950
    fixed top-0 z-9999 opacity-20
    duration-300 ease-linear
    ${props.open ? "translate-x-0" : "hidden"}
`}>
    <div className="bg-white">
        {props.children}
    </div>
</div> */}