"use client"
import { IconTabela, IconVHL } from '@/components/icons/IconesMaterial';
import Layout from './../../../components/template/Layout';
import NavigatePage from '@/components/navigatePage/NavigatePage';
import { VhlUrl } from '@/data/config/vhlUrl';
import TabelaVhl from './TabelaVhl';
import useVhlData from '@/data/hook/useVhlContext';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useEffect } from 'react';
import { Alert, Snackbar } from "@mui/material";

export default function TabelaMainVHL() {
    const { banco, BuscarTabelaVhl, open, setOpen, mensagem } = useVhlData()

    useEffect(() => {
        BuscarTabelaVhl!()
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
            <div className='flex flex-col item-center h-[100%] overflow-auto'>
                <div className='mt-2 mx-3 max-sm:h-[7%]'>
                    <NavigatePage
                        titulo="Tabela"
                        iconeTitulo={<IconTabela sx={{ fontSize: 60 }} className=" text-neutral-800 dark:text-neutral-200" />}
                        data={VhlUrl} dataMini={VhlUrl}
                    />
                </div>
                <div className='max-sm:mt-10 mx-3 max-sm:w-[93%] max-sm:h-[97%]'>
                    <TabelaVhl dados={banco} />
                </div>
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
        </Layout>
    )
}