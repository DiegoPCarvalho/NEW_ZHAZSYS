import { IconClose } from "../icons/IconesMaterial"
import AreaTexto from "../shared/AreaTexto"

interface ModalProblemaProps {
    children?: any
    open?: boolean
    className?: string
}

export default function ModalProblema(props: ModalProblemaProps) {
    return (
        <div className={`
                 fixed top-0 left-0 h-screen w-screen
                bg-neutral-900 bg-opacity-60
                 ${props.open ? "translate-x-0" : "hidden"}
            `}>  
                <div className={`
                    bg-white overflow-y-auto
                    dark:border-2 
                    dark:border-neutral-600
                    rounded-lg 
                    dark:bg-neutral-950
                    fixed z-9999 ${props.className}
                    duration-300 ease-linear
                ${props.open ? "translate-x-0" : "hidden"}

                    `}>
                    <div className="flex flex-col justify-between h-60">
                        <div className="flex justify-between bg-red-500 dark:bg-red-700 h-10 w-96">
                            <div className="text-neutral-100 text-xl font-bold flex items-center ml-2">Problema</div>
                            <div className="text-neutral-100 cursor-pointer hover:bg-red-400 dark:hover:bg-neutral-600">
                                <IconClose fontSize="large" />
                            </div>
                        </div>
                        <div className="grow">
                           <AreaTexto 
                                linhas={5}
                                className="mr-2 mt-1"
                           />
                        </div>
                        <div className="h-10 flex justify-end mr-2">
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}