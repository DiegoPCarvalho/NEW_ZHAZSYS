import Entrada from "@/components/shared/Entrada";
import Formulario from "@/components/shared/Formulario";
import useAppData from "@/data/hook/useAppData";


export default function FormLab(){
    const { tema } = useAppData()
    return(
        <Formulario>
            <div className="flex items-center max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <Entrada
                    id={tema === 'dark' ? "dataDark" : ""}
                    texto="Data:"
                    tipo="datetime-local"
                />
                <Entrada
                    texto="OS:"
                    mensagemCampo="..."
                />
                <Entrada
                    texto="Cliente:"
                    mensagemCampo="..."
                    className="grow"
                />
                <Entrada
                    texto="Serviço:"
                />
            </div>
            <div className="flex item-center mt-10 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
            </div>
            <div className="grow">
                 <div>3</div>   
            </div>
        </Formulario>
    )
}