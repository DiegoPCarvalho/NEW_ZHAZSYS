import Botao from '@/components/shared/Botao';
import useGncData from '@/data/hook/useGncData';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

export default function RamalUnit() {
    const { setOpenMHome, ramalUnit } = useGncData()
    return (
        <div className="flex flex-col dark:text-neutral-200 w-[585px]">
            <div className='flex justify-between items-center'>
                <div className="font-bold text-2xl">Ramais</div>
                <Botao  
                    className={`
                                    cursor-pointer transition-all bg-red-500 dark:bg-red-700 text-white px-5 py-2 rounded-lg
                                    border-red-600 dark:border-red-800 h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                `}

                    executar={() => setOpenMHome!(false)}
                ><span>X</span></Botao>
            </div>
            <div className='flex flex-wrap mt-2'>
                {ramalUnit!.map((registro: any) => {
                    return (
                        <div key={registro.id} className="border-2 ml-1 border-emerald-500 dark:border-emerald-700 bg-emerald-100 dark:bg-emerald-800 flex justify-between mb-1 p-2 rounded-lg w-72">
                            <div className="font-bold">{registro.Usuario}</div>
                            <div>
                                <PermPhoneMsgIcon className="text-emerald-700 dark:text-neutral-200 mr-1"/>
                                {registro.Ramal}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}