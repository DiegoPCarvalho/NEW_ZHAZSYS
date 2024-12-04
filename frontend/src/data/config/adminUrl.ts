import {IconUser, IconContrato, IconDepartamento, IconEquipamento, IconServico, IconRamal } from "@/components/icons/IconesMaterial";

export const AdminUrl = [ 
    {
        id: 1,
        nome: "Usuários",
        icone: IconUser,
        url: "/Admin/Usuarios"
    },
    {
        id: 2,
        nome: "Equipamentos",
        icone: IconEquipamento,
        url: "/Admin/Equipamentos"
    },
    {
        id: 3,
        nome: "Departamentos",
        icone: IconDepartamento,
        url: "/Admin/Departamentos"
    },
    {
        id:4,
        nome: "Contratos",
        icone: IconContrato,
        url: "/Admin/Contratos"
    },
    {
        id: 5,
        nome: "Serviços",
        icone: IconServico,
        url: "/Admin/Servicos"
    },
    {
        id: 6,
        nome: "Ramais",
        icone: IconRamal,
        url: "/Admin/Ramais"
    }
]