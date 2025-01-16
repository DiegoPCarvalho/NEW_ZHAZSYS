export function somarTempos(tempo1: any, tempo2: any) {

    var array1 = tempo1.split(':');

    var tempo_seg1: any = (parseInt(array1[0]) * 3600) + (parseInt(array1[1]) * 60) + parseInt(array1[2]);

    var array2 = tempo2.split(':');

    var tempo_seg2: any = (parseInt(array2[0]) * 3600) + (parseInt(array2[1]) * 60) + parseInt(array2[2]);

    var tempofinal = parseInt(tempo_seg1) + parseInt(tempo_seg2);

    var hours = Math.floor(tempofinal / (60 * 60));

    var divisorMinutos = tempofinal % (60 * 60);

    var minutes = Math.floor(divisorMinutos / 60);

    var divisorSeconds = divisorMinutos % 60;

    var seconds = Math.ceil(divisorSeconds);

    var contador = "";

    if (hours < 10) { contador = "0" + hours + ":"; } else { contador = "" + hours + ":"; }

    if (minutes < 10) { contador += "0" + minutes + ":"; } else { contador += "" + minutes + ":"; }

    if (seconds < 10) { contador += "0" + seconds; } else { contador += "" + seconds; }

    // if (hours < 10) { contador = "0" + hours + ":"; } else { contador = hours + ":"; }

    // if (minutes < 10) { contador += "0" + minutes + ":"; } else { contador += minutes + ":"; }

    // if (seconds < 10) { contador += "0" + seconds; } else { contador += seconds; }

    return contador;
}

export function retornodads(dado: any){
    if(dado === undefined || dado === ""){
        return "00:00:00"
    }else {
        return dado
    }
}