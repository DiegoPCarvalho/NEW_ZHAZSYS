'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((chave: string) => {
        const valorLocal = window?.localStorage?.getItem(chave)
        return valorLocal ? valorLocal : ''
    }, [])

    const remove = useCallback((chave: string) => {
        window?.localStorage?.removeItem(chave)
    }, [])

    const set = useCallback((chave: string, valor: any) => {
        window?.localStorage?.setItem(chave, valor)
    }, [])

    return { get, set, remove }
}