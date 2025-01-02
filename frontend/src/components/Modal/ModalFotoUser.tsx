import * as React from 'react';
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

interface ModalFotoUserProps {
  open: boolean
  close: () => void
  fotoUrl?: string
  save: () => void
  mudarValorCampo?: (novoValor: any) => void
}


export default function ModalFotoUser(props: ModalFotoUserProps) {
  const { tema } = useAppData()

  return (
    <div>
      <Modal
        open={props.open!}
        onClose={props.close}
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
                value={props.fotoUrl}
                name="fotoUrl"
                onChange={e => props.mudarValorCampo!(e)}               
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
                executar={props.save}
              >Salvar</Botao>
              <Botao
                className={`
                    cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                    border-red-600 dark:border-red-800
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  
                    `}
                    executar={props.close}
              >Voltar</Botao>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}