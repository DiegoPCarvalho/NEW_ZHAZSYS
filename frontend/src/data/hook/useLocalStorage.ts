"use client"
import { useEffect, useState } from "react"

export default function useLocalStorage() {
    const [state, setState] = useState<Storage>()
    
    useEffect(() => {
        const valor = window.localStorage
        setState(valor)
    }, [state])

    const get = (chave: string) => {
        const valorLocal = state?.getItem(chave)
        return valorLocal
    }
    
    const remove = (chave: string) => {
        return state?.removeItem(chave)
    }

    const set = (chave: string, valor: any) => {
        return state?.setItem(chave, JSON.stringify(valor))
    }

    return { get, set, remove }
}
