"use client"
import './menu.css';
import MenuItem from "./MenuItem";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";
import MenuDropDownItem from "./MenuDropDownItem";
import { useState, useEffect } from "react";
import useAppData from "@/data/hook/useAppData";
import {
    IconVHL,
    IconContrato,
    IconPerfil,
    IconSetaDown,
    IconGerencia,
    IconDashboard,
    IconFila,
    IconTabela,
    IconForm,
    IconRelatorio,
    IconQrcode,
    IconRegAntigo
} from "@/components/icons/IconesMaterial";




export default function Menu() {

    const [gnc, setGnc] = useState<Boolean>(false)
    const [lbo, setLbo] = useState<Boolean>(false)
    const [vhl, setVHL] = useState<Boolean>(false)
    const { altenarMenu, menu } = useAppData()

    useEffect(() => {
        if (!menu) {
            setGnc(false)
            setLbo(false)
            setVHL(false)
        }
    }, [menu])

    function renderOuther() {
        return (
            <ul>
                <MenuItem url="/Contrato" texto="Contrato" icone={<IconContrato />} />
            </ul>
        )
    }

    function renderSettings() {
        return (
            <ul>
                <MenuItem url="/" texto="Perfil" icone={<IconPerfil />} />
            </ul>
        )
    }

    return (
        <div className="flex flex-col m-2">
            <div className="flex justify-center w-full mb-3">
                <Link href="/" legacyBehavior>
                    <Image src={logo} alt="" className="h-12 w-48 cursor-pointer" />
                </Link>
            </div>
            <div className="overflow-auto" id="hiddenScroll">
                <div className="mt-3 ml-5 text-xs font-extrabold text-gray-400">MENU</div>
                <div>
                    <MenuDropDown classe="ml-11" icone={<IconGerencia />} texto="Gerencia" marcacao={<IconSetaDown />} down={gnc} executar={() => setGnc(!gnc)}>
                        <MenuDropDownItem icone={<IconDashboard />} texto="Dashbord" executar={altenarMenu} url="/Gerencia/Dashboard" />
                        <MenuDropDownItem icone={<IconFila />} texto="Fila Técnica" executar={altenarMenu} url="/Gerencia/FilaTecnica" />
                        <MenuDropDownItem icone={<IconTabela />} texto="Tabela Geral" executar={altenarMenu} url="/Gerencia/TabelaGeral" />
                    </MenuDropDown>
                    <MenuDropDown classe="ml-5" icone={<IconQrcode />} texto="Laboratório" marcacao={<IconSetaDown />} down={lbo} executar={() => setLbo(!lbo)}>
                        <MenuDropDownItem icone={< IconFila />} texto="Fila Técnica" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconForm />} texto="Formulário" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconTabela />} texto="Tabela" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconRegAntigo />} texto="Reg. Antigo" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconRelatorio />} texto="Relatório" executar={altenarMenu} url="/" />
                    </MenuDropDown>
                    <MenuDropDown classe="ml-20" icone={<IconVHL />} texto="VHL" marcacao={<IconSetaDown />} down={vhl} executar={() => setVHL(!vhl)}>
                        <MenuDropDownItem icone={<IconForm />} texto="Formulário" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconTabela />} texto="Tabela" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconRegAntigo />} texto="Reg. Antigo" executar={altenarMenu} url="/" />
                        <MenuDropDownItem icone={<IconRelatorio />} texto="Relatório" executar={altenarMenu} url="/" />
                    </MenuDropDown>
                </div>
                <div className="mt-8 ml-5 text-xs font-extrabold text-gray-400">OUTHERS</div>
                <div className="">
                    {renderOuther()}
                </div>
                <div className="mt-8 ml-5 text-xs font-extrabold text-gray-400">SETTINGS</div>
                <div className="">
                    {renderSettings()}
                </div>
            </div>
        </div>
    )
}