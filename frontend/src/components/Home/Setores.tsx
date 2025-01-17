import Link from "next/link";
import { IconDash, IconFila, IconForm, IconMeta, IconUser, IconTabela, IconServico, IconContrato, IconEquipamento } from "../icons/IconesMaterial";

interface SetoresProps {
    acesso: string
}

export default function Setores(props: SetoresProps) {
    return (
        <div className="w-56 h-[180px] p-2 flex items-center justify-evenly flex-col bg-white shadow-lg rounded-lg mx-1 dark:text-neutral-200 dark:bg-neutral-950 border-2 dark:border-neutral-600">
            <div className="font-bold text-3xl max-[1024px]:text-2xl">{props.acesso === "Level 3" ? "Admin" : props.acesso === "Level 2" ? "Gerência" : "Laboratório"}</div>
            <div className="flex flex-col justify-between">
                {props.acesso === "Level 3" ? (
                    <>
                        <div className="flex space-x-2 mb-2">
                            <Link href="/Admin/Usuarios">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconUser /></div>
                            </Link>
                            <Link href="/Admin/Servicos">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconServico /></div>
                            </Link>
                        </div>
                        <div className="flex space-x-2">
                            <Link href="/Admin/Contratos">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconContrato /></div>
                            </Link>
                            <Link href="/Admin/Equipamentos">
                                <div
                                    className="
                                        cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                        border-green-600 dark:border-green-800 font-bold text-xl h-12
                                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                        "
                                ><IconEquipamento /></div>
                            </Link>
                        </div>
                    </>
                ) : props.acesso === "Level 2" ? (
                    <>
                        <div className="flex space-x-2 mb-2">
                            <Link href="/Gerencia/Dashboard">
                                <div
                                    className="
                                        cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                        border-green-600 dark:border-green-800 font-bold text-xl h-12
                                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconDash /></div>
                            </Link>
                            <Link href="/Gerencia/FilaTecnica">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconFila /></div>
                            </Link>
                        </div>
                        <div className="flex space-x-2">
                            <Link href="/Gerencia/TabelaGeral">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconTabela /></div>
                            </Link>
                            <Link href="/Gerencia/MetaLab">
                                <div
                                    className="
                                        cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                        border-green-600 dark:border-green-800 font-bold text-xl h-12
                                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                        "
                                ><IconMeta /></div>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                    <div className="flex space-x-2 mb-2">
                            <Link href="/Laboratorio/FilaTecnica">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconFila /></div>
                            </Link>
                            <Link href="/Laboratorio/Formulario">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconForm /></div>
                            </Link>
                        </div>
                        <div className="flex space-x-2">
                            <Link href="/Laboratorio/Tabela">
                                <div
                                    className="
                                    cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                    border-green-600 dark:border-green-800 font-bold text-xl h-12
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                    "
                                ><IconTabela /></div>
                            </Link>
                            <Link href="/Laboratorio/Relatorio">
                                <div
                                    className="
                                        cursor-pointer transition-all bg-green-500 dark:bg-green-700 text-white px-5 py-2 rounded-lg
                                        border-green-600 dark:border-green-800 font-bold text-xl h-12
                                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                                        "
                                ><IconMeta /></div>
                            </Link>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}