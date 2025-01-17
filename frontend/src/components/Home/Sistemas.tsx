export default function Sistemas(){
    return(
        <div className="w-56 h-52 p-2 flex items-center justify-between mb-2 flex-col bg-white shadow-lg rounded-lg mx-1 mt-1 dark:text-neutral-200 dark:bg-neutral-950 border-2 dark:border-neutral-600">
            <div className="font-bold text-3xl max-[1024px]:text-2xl">Sistemas</div>
            <div className="grow flex flex-col justify-between">
                <a href="https://app2.cosmoserp.com/zhaz/" target="_blank">
                    <div
                        className="
                          cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-4 py-2 rounded-lg
                            border-sky-600 dark:border-sky-800 font-bold text-xl h-12
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        "
                    >Cosmos</div>
                </a>
                <a href="https://dev-painel-1c49beb04283.herokuapp.com/lab/geral/avulso" target="_blank">
                    <div
                    className="
                        cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-4 py-2 rounded-lg
                        border-sky-600 dark:border-sky-800 font-bold text-lg h-12 flex items-center
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
            "
                    >Painel OS</div>
                </a>
                <a href="https://zhazcheck.netlify.app/index.html" target="_blank">
                    <div
                    className="
                        cursor-pointer transition-all bg-sky-500 dark:bg-sky-700 text-white px-3 py-2 rounded-lg
                        border-sky-600 dark:border-sky-800 font-bold text-lg h-12
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
            "
                    >ZhazCheck</div>
                </a>
            </div>
        </div>
    )
}