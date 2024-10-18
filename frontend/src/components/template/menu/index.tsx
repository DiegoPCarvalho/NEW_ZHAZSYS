import { IconeContrato, IconeGerente, IconeLab, IconeVHL } from "@/components/icons/Index";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className={`
            flex flex-col
            text-neutral-600
        `}>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Gerência" icone={IconeGerente} />
                <MenuItem url="/" texto="Laboratório" icone={IconeLab} />
                <MenuItem url="/" texto="Contrato" icone={IconeContrato} />
                <MenuItem url="/" texto="VHL" icone={IconeVHL} />
            </ul>
        </aside>
    )
}