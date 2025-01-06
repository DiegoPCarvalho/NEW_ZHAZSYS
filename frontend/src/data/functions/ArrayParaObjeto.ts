export function ArrayParaObjeto(dado: any) {
    let quantidade = dado.reduce(function (todosNomes: any, dado: any) {
        if (dado in todosNomes) {
            todosNomes[dado]++;
        } else {
            todosNomes[dado] = 1;
        }
        return todosNomes;
    }, {});

    let dadoFinal = Object.entries(quantidade).map(([name, y]) => ({ name, y }))

    return dadoFinal
}