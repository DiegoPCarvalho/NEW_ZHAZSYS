import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Botao from './Botao';
import { IconDeletar } from "@/components/icons/IconesMaterial";

interface DialogExcluirProps {
  open: boolean
  close: () => void
  exec: () => void
}

export default function DialogExcluir(props: DialogExcluirProps) {

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.close}
      >
        <div className="bg-red-700 h-[40px] flex items-center">
          <span className="font-bold text-xl text-white ml-4">Excluir</span>
        </div>
        <DialogContent className="mt-5">
          <DialogContentText id="alert-dialog-description">
            <span className="">Deseja realmente excluir?</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="h-16">
          <Botao
            className='
              cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
              border-sky-600 dark:border-sky-800
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
          '
            executar={props.exec}>Sim</Botao>
          <Botao
            className="
              cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
              border-red-600 dark:border-red-800
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
          "
            executar={props.close}>
            Não
          </Botao>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}