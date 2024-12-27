import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useAppData from '@/data/hook/useAppData';
import Botao from '../shared/Botao';

const estilo: any = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};


export default function BasicModal() {
  const { tema } = useAppData()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={estilo} className={`${tema === "dark" ? "text-white bg-neutral-800" : "bg-white"} rounded-lg`}>
          <div className={`bg-yellow-600 font-bold text-white px-2 py-3 rounded-t-lg text-xl`}>Alterar a Foto</div>
          <div className="flex flex-col">
            <div className="flex flex-col p-3 mt-2">
              <div className='font-bold text-xl'>FotoUrl:</div>
              <input
                type="text"
                className={`
                    box-border shadow-md
                    px-4 py-3 rounded-lg  mt-1
                    border
                    focus:outline-none
                    max-sm:mb-2
                    ${tema === "dark" ? 
                      "border-zinc-800 focus:border-emerald-700 bg-neutral-700 focus:bg-neutral-700" 
                      : "focus:border-emerald-500 focus:bg-white bg-white"}
                `}               
            />
            </div>
            <div className="p-2 h-16 mb-2 mt-2 flex justify-evenly">
              <Botao
                className={`
                    cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-5 py-2 rounded-lg
                    border-sky-600 dark:border-sky-800
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                `}
              >Salvar</Botao>
              <Botao
                className={`
                    cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                    border-red-600 dark:border-red-800
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                    `}
              >Voltar</Botao>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}