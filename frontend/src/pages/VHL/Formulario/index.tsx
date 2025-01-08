"use client"
import { IconForm, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import { VhlUrl } from '@/data/config/vhlUrl';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import FormVhl from './FormVHL';
import useGncData from '@/data/hook/useGncData';
import { useEffect } from 'react';
import useVhlData from '@/data/hook/useVhlContext';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Alert, Snackbar } from "@mui/material";

export default function FormularioVHL() {
    const { buscarVhl } = useGncData()
    const { limparCampos, alterar, open, setOpen, mensagem } = useVhlData()

    useEffect(() => {
        buscarVhl!()
        limparCampos!()
    }, [])

    const close = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen!(false);
    };

    return (
        <Layout icone={<IconVHL fontSize='large' />} texto="VHL">
            <div className='flex flex-col item-center h-full overflow-auto'>
                <div className='mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Formulário"
                        iconeTitulo={<IconForm sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='max-sm:mt-1 mx-1 mt-5 max-sm:w-[100%] max-sm:h-[97%]'>
                    <FormVhl />
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={close}
                >
                    <Alert
                        onClose={close}
                        severity={mensagem!.severity}
                        variant={mensagem!.variant}
                        sx={{ width: '100%' }}
                    >
                        {mensagem!.mensagem}
                    </Alert>
                </Snackbar>
            </div>
        </Layout>
    )
}