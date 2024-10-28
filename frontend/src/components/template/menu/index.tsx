"use client"
import MenuItem from "./MenuItem";
import Image from "next/image";
import logo from "@/assets/img/logoZhaz.png";

import AddchartIcon from '@mui/icons-material/Addchart';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import DriveFileMoveSharpIcon from '@mui/icons-material/DriveFileMoveSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuDropDown from "./MenuDropDown";
import MenuDropDownItem from "./MenuDropDownItem";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TableViewIcon from '@mui/icons-material/TableView';
import { useState, useEffect } from "react";
import useAppData from "@/data/hook/useAppData";
import FeedIcon from '@mui/icons-material/Feed';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

export default function Menu() {

    const [gnc, setGnc] = useState<Boolean>(false)
    const [lbo, setLbo] = useState<Boolean>(false)
    const { altenarMenu, menu } = useAppData()

    useEffect(() =>{
        if(!menu){
            setGnc(false)
            setLbo(false)
        }
    }, [menu])

    function renderMenu() {
        return (
            <ul className="">
                <MenuItem url="/" texto="VHL" icone={<ShoppingCartSharpIcon />} />
            </ul>
        )
    }

    function renderOuther() {
        return (
            <ul>
                <MenuItem url="/" texto="Contrato" icone={<DriveFileMoveSharpIcon />} />
            </ul>
        )
    }

    function renderSettings() {
        return (
            <ul>
                <MenuItem url="/" texto="Perfil" icone={<PersonAddAltOutlinedIcon />} />
            </ul>
        )
    }

    return (
        <div className="flex flex-col m-2">
            <div className="flex justify-center w-full mb-3">
                <Image src={logo} alt="" className="h-12 w-48" />
            </div>
            <div className="mt-3 ml-5 text-xs font-extrabold text-gray-400">MENU</div>
            <div>
                <MenuDropDown classe="ml-11" icone={<AddchartIcon />} texto="Gerencia" marcacao={<KeyboardArrowRightIcon />} down={gnc} executar={() => setGnc(!gnc)}>
                    <MenuDropDownItem icone={<DashboardIcon />} texto="Dashbord" executar={altenarMenu}/>
                    <MenuDropDownItem icone={<ListAltIcon />} texto="Fila Técnica" executar={altenarMenu}/>
                    <MenuDropDownItem icone={<TableViewIcon />} texto="Tabela Geral" executar={altenarMenu}/>
                </MenuDropDown>
                <MenuDropDown classe="ml-3" icone={<QrCode2SharpIcon />} texto="Laboratório" marcacao={<KeyboardArrowRightIcon />} down={lbo} executar={() => setLbo(!lbo)}>
                    <MenuDropDownItem icone={< ListAltIcon/>} texto="Fila Técnica" executar={altenarMenu}/>
                    <MenuDropDownItem icone={<FeedIcon />} texto="Formulário" executar={altenarMenu}/>
                    <MenuDropDownItem icone={<TableViewIcon />} texto="Tabela" executar={altenarMenu}/>
                    <MenuDropDownItem icone={<StackedBarChartIcon />} texto="Relatório" executar={altenarMenu}/>
                </MenuDropDown>
            </div>
            <div>
                {renderMenu()}
            </div>
            <div className="mt-8 ml-5 text-xs font-extrabold text-gray-400">OUTHERS</div>
            <div className="ml-3">
                {renderOuther()}
            </div>
            <div className="mt-8 ml-5 text-xs font-extrabold text-gray-400">SETTINGS</div>
            <div className="ml-3">
                {renderSettings()}
            </div>
        </div>
    )
}