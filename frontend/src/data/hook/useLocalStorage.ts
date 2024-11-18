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
        return valorLocal ? valorLocal : ''
    }
    const remove = (chave: string) => {
        state?.removeItem(chave)
    }

    const set = (chave: string, valor: any) => {
        state?.setItem(chave, valor)
    }

    return { get, set, remove }
}
