export function FormatarTempoBto(tempo: any) {
    let novo = tempo.replace(/(\d+):(\d+):(\d+)/, '$1 h : $2 m : $3 s')

    return novo
}