import * as React from 'react';
import Popover from '@mui/material/Popover';
import { IconInfo } from '../icons/IconesMaterial';
import useAppData from '@/data/hook/useAppData';

export default function PopoverFila({dados}: any) {

  const { tema } = useAppData() 

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="flex items-end">
      <button
            className={`
                cursor-pointer transition-all bg-neutral-500 dark:bg-neutral-700 text-white px-2 py-2 rounded-lg
                border-neutral-600 dark:border-neutral-800
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]    
            `}
            aria-describedby={id} onClick={handleClick}>
                <IconInfo fontSize="large" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={`${tema === "dark" ? "bg-neutral-700 border-2 border-neutral-600 rounded" : "bg-neutral-500"} text-neutral-200 px-3 py-2 font-bold`}>
            <div className="flex flex-col w-96">
                <span>Cliente: {dados?.Cliente}</span>
                <span>Equip: {dados?.Equipamento}</span>
                <span>NS: {dados?.NS}</span>
            </div>
        </div>
      </Popover>
    </div>
  );
}