import TabelaGnc from "@/components/shared/TabelaGnc";
import useGncData from "@/data/hook/useGncData";
import FiltroGnc from "@/components/shared/FiltroGnc";

interface TabelaRaLabProps {
    dados?: any[]
}

export default function TabelaRaLab(props: TabelaRaLabProps) {

    const { data } = useGncData()

    function renderRows() {
        return data?.map((registro: any, i: number) => {
            return (
                <tr key={registro.id} className={`${intercalado(i)} text-center`}>
                    <td className="">{registro.id}</td>
                    <td className="">{registro.nome}</td>
                </tr>
            )
        })
    }

    function intercalado(i: number) {
        let resultado = i % 2

        return resultado === 1 ? "bg-neutral-400 dark:bg-neutral-600 text-white" : "dark:text-white"
    }

    return (
        <div className="flex flex-col mt-3">
            <div className="my-5">
                <FiltroGnc semDia />
            </div>
            <div className="mt-5">
                <TabelaGnc
                    dados={props.dados}
                    head={<>
                        <th className="rounded-tl-lg p-2">id</th>
                        <th className="max-sm:hidden">Data</th>
                        <th className="">OS</th>
                        <th className="max-sm:hidden">Cliente</th>
                        <th className="max-sm:hidden">Equipamento</th>
                        <th className="max-sm:hidden">Modelo</th>
                        <th className="max-sm:hidden">NS</th>
                        <th className="max-sm:hidden">Serviço</th>
                        <th className="rounded-tr-lg">Ações</th>
                    </>}
                    tb="w-full"
                >
                    {renderRows()}
                </TabelaGnc>
            </div>
        </div>
    )
}