export function diferenca(data: any, modo: string) {
    const d2: any = new Date()
    const d1: any = new Date(data)
    
    if (modo === 'final') {
        const dif = d2 - d1
        const diferenca = dif / (1000 * 60 * 60);

        return +diferenca.toFixed(0)

    } else {
        const dif = d2 - d1
        const diferenca = dif / (1000 * 60);

        return +diferenca.toFixed(0)
    }
}