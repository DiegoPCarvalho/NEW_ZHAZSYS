'use client'
import Layout from "@/components/template/Layout";
import { IconeHome } from "@/components/icons/Index";
import { useEffect, useState } from "react";
import useAppData from "@/data/hook/useAppData";
import CardHome from "@/components/Home/CardHome";
import DescriptionIcon from '@mui/icons-material/Description';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import GraficoHome from "@/components/Home/GraficoHome";
import { initialGraficoHome, GraficoHomeProps } from "@/data/interfaces/GraficoHome";
import Sistemas from "@/components/Home/Sistemas";
import Setores from "@/components/Home/Setores";
import Cookies from 'js-cookie';
import Ramais from "@/components/Home/Ramais";


export default function Home() {
    const { BuscarDadoUserAcesso } = useAppData()
    const [acesso, setAcesso] = useState<string>("")
    const [graficoHome, setGraficoHome] = useState<GraficoHomeProps>(initialGraficoHome)

    useEffect(() => {
        BuscarDadoUserAcesso!()
        buscarCookie()
    }, [])

    function buscarCookie(){
        const acesso = Cookies.get("acesso-user")
        setAcesso(acesso!)
    }

    return (
        <Layout icone={IconeHome} texto="Home">
            <div className="grow">
                <div className="flex">
                    <div className="flex flex-col grow w-[75%]">
                        <div className="ml-1 flex justify-between">
                            <CardHome titulo="Avulso" qtde={graficoHome?.avulso} icone={<DescriptionIcon fontSize="large"/>} corIcone="bg-yellow-500 dark:bg-yellow-600 text-white rounded-md p-2 max-[1024px]:p-1"/>
                            <CardHome titulo="Contratos" qtde={graficoHome?.contratos} icone={<DriveFileMoveIcon fontSize="large"/>} corIcone="bg-blue-500 dark:bg-blue-600 text-white rounded-md p-2 max-[1024px]:p-1"/>
                            <CardHome titulo="Serviços" qtde={graficoHome?.servicos} icone={<LibraryBooksIcon fontSize="large"/>} corIcone="bg-green-500 dark:bg-green-600 text-white rounded-md p-2 max-[1024px]:p-1"/>
                            <CardHome titulo="VHL" qtde={graficoHome?.vhl} icone={<ShoppingCartCheckoutIcon fontSize="large"/>} corIcone="bg-purple-500 dark:bg-purple-600 text-white rounded-md p-2 max-[1024px]:p-1"/>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <Ramais />
                            <div className="grow max-[1024px]:w-full">
                                <GraficoHome 
                                    vertical={300}
                                    dado={graficoHome?.graficoProdDiaria}
                                />
                            </div>
                    </div>
                    </div>
                    <div className="w-[25%] max-[1024px]:grow">
                        <GraficoHome 
                            horizontal={400}
                            vertical={410}
                            dado={graficoHome?.graficoServico}
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col justify-between">
                        <Sistemas />
                        <Setores  acesso={acesso}/>
                    </div>
                    <div className="flex justify-evenly grow">
                        <div className="w-[50%]">
                            <GraficoHome 
                                vertical={380}
                                dado={graficoHome?.graficoProdDiaria}
                                />
                        </div>
                        <div className="w-[50%]">
                            <GraficoHome 
                                vertical={380}
                                dado={graficoHome?.graficoEquipamento}
                                />
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
}