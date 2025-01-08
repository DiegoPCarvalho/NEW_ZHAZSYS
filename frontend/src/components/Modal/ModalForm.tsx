import { SnackbarCloseReason } from '@mui/material/Snackbar';

interface ModalFormProps {
    children?: any
    open?: boolean
}

export default function ModalForm(props: ModalFormProps) {
    return (
        <div className={`
                bg-white overflow-y-auto
                border-2 border-neutral-200
                dark:border-neutral-600
                rounded-lg p-4
                dark:bg-neutral-950
                fixed left-[10%] right-[10%] max-2xl:left-[10%] max-2xl:right-[10%] top-[20%] z-99999
                duration-300 ease-linear
                ${props.open ? "translate-x-0" : "hidden"}
            `}>
            {props.children}
        </div>
    )
}