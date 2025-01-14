"use client"
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
    IconDash,
    IconFila,
    IconTabela,
    IconForm,
    IconRelatorio,
    IconQrcode,
    IconRegAntigo,
    IconAdmin,
    IconUser,
    IconDepartamento,
    IconServico,
    IconRamal,
    IconEquipamento,
    IconMeta
} from "@/components/icons/IconesMaterial";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




export default function Menu() {

    const [gnc, setGnc] = useState<boolean>(false)
    const [lbo, setLbo] = useState<boolean>(false)
    const [vhl, setVHL] = useState<boolean>(false)
    const [adm, setAdm] = useState<boolean>(false)
    const { altenarMenu, menu, userMain } = useAppData()

    useEffect(() => {
        if (!menu) {
            setGnc(false)
            setLbo(false)
            setVHL(false)
            setAdm(false)
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
                <MenuItem url="/Perfil" texto="Perfil" icone={<IconPerfil />} />
            </ul>
        )
    }


    return (
        <div className="flex flex-col m-2">
            <div className="flex justify-between w-full mb-3" onClick={altenarMenu}>
                <Link href="/" legacyBehavior>
                    <Image src={logo} alt="" className="h-12 w-40 cursor-pointer" />
                </Link>
                <div className="flex items-center ml-3">
                    <ArrowBackIcon sx={{ fontSize: 25 }} onClick={altenarMenu} className="text-gray-200 hover:rounded-full cursor-pointer hover:bg-zinc-500 dark:hover:bg-zinc-700" />
                </div>
            </div>
            <div className="overflow-auto" id="hiddenScroll">
                <div className="mt-3 ml-5 text-xs font-extrabold text-gray-400">MENU</div>
                <div className="">
                    {userMain!.acesso === "Level 3" || userMain!.acesso === "Level 2" ?
                        <MenuDropDown classe="" icone={<IconGerencia />} texto="Gerencia" marcacao={<IconSetaDown />} down={gnc} executar={() => setGnc(!gnc)}>
                            <MenuDropDownItem icone={<IconDash />} texto="Dashbord" executar={altenarMenu} url="/Gerencia/Dashboard" />
                            <MenuDropDownItem icone={<IconFila />} texto="Fila Técnica" executar={altenarMenu} url="/Gerencia/FilaTecnica" />
                            <MenuDropDownItem icone={<IconTabela />} texto="Tabela Geral" executar={altenarMenu} url="/Gerencia/TabelaGeral" />
                            <MenuDropDownItem icone={<IconMeta />} texto="Meta Lab." executar={altenarMenu} url="/Gerencia/MetaLab" />
                        </MenuDropDown>
                        : false
                    }
                    <MenuDropDown classe="" icone={<IconQrcode />} texto="Laboratório" marcacao={<IconSetaDown />} down={lbo} executar={() => setLbo(!lbo)}>
                        <MenuDropDownItem icone={< IconFila />} texto="Fila Técnica" executar={altenarMenu} url="/Laboratorio/FilaTecnica" />
                        <MenuDropDownItem icone={<IconForm />} texto="Formulário" executar={altenarMenu} url="/Laboratorio/Formulario" />
                        <MenuDropDownItem icone={<IconTabela />} texto="Tabela" executar={altenarMenu} url="/Laboratorio/Tabela" />
                        <MenuDropDownItem icone={<IconRegAntigo />} texto="Reg. Antigo" executar={altenarMenu} url="/Laboratorio/RegAntigo" />
                        <MenuDropDownItem icone={<IconRelatorio />} texto="Relatório" executar={altenarMenu} url="/Laboratorio/Relatorio" />
                    </MenuDropDown>
                    <MenuDropDown classe="" icone={<IconVHL />} texto="VHL" marcacao={<IconSetaDown />} down={vhl} executar={() => setVHL(!vhl)}>
                        <MenuDropDownItem icone={<IconForm />} texto="Formulário" executar={altenarMenu} url="/VHL/Formulario" />
                        <MenuDropDownItem icone={<IconTabela />} texto="Tabela" executar={altenarMenu} url="/VHL/Tabela" />
                        <MenuDropDownItem icone={<IconRegAntigo />} texto="Reg. Antigo" executar={altenarMenu} url="/VHL/RegAntigo" />
                        <MenuDropDownItem icone={<IconRelatorio />} texto="Relatório" executar={altenarMenu} url="/VHL/Relatorio" />
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
                <div className="">
                    {userMain!.acesso === "Level 3" ? 
                        <MenuDropDown classe="" icone={<IconAdmin />} texto="Admin" marcacao={<IconSetaDown />} down={adm} executar={() => setAdm(!adm)}>
                            <MenuDropDownItem icone={<IconUser />} texto="Usuários" executar={altenarMenu} url="/Admin/Usuarios" />
                            <MenuDropDownItem icone={<IconEquipamento />} texto="Equipamentos" executar={altenarMenu} url="/Admin/Equipamentos" />
                            <MenuDropDownItem icone={<IconDepartamento/>} texto="Departamentos" executar={altenarMenu} url="/Admin/Departamentos" />
                            <MenuDropDownItem icone={<IconContrato />} texto="Contratos" executar={altenarMenu} url="/Admin/Contratos" />
                            <MenuDropDownItem icone={<IconServico />} texto="Serviços" executar={altenarMenu} url="/Admin/Servicos" />
                            <MenuDropDownItem icone={<IconRamal />} texto="Ramais" executar={altenarMenu} url="/Admin/Ramais" />
                        </MenuDropDown>
                        : false
                    }
                </div>
            </div>
        </div>
    )
}