import useAppData from '@/data/hook/useAppData';

export default function MudarTemaMini() {
    const { mudarTema, tema } = useAppData()

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" value="" type="checkbox" onClick={mudarTema} checked={tema === 'dark' ? true : false}/>
            <div
                className="w-[60px] h-8 rounded-full ring-0 peer duration-500 outline-none bg-yellow-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-orange-400 before:rounded-full  before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[1px] after:right-0 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
            ></div>
        </label>

    )
}