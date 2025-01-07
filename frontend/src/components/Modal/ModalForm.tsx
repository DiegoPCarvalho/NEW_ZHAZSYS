import * as React from 'react';
import useAppData from '@/data/hook/useAppData';
import Modal from 'react-modal';

const MODAL_STYLE: any = {
    content: {
        position: 'relative',
        top: '25%',
        left: '10%',
        right: 'auto',
        bottom: 'auto',
        width: '80%'
    },
    overlay: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0,0,0, 0.7)',
        zIndex: '1000'
    }
}


interface ModalFormProps {
    children?: any
    open: boolean
    close: () => void
    fotoUrl?: string
    save: () => void
    mudarValorCampo?: (novoValor: any) => void
}

export default function ModalForm(props: ModalFormProps) {
    const { tema } = useAppData()

    return (
        <div>
            <Modal
                isOpen={props.open}
                style={MODAL_STYLE}
                onRequestClose={props.close}
            >
                <div className={`${tema === "dark" ? "text-white bg-neutral-800" : "bg-white"} rounded-lg p-10`}>
                    {props.children}
                </div>
            </Modal>
        </div>
    );
}