import moment from 'moment';

export function Tempo(ini: any, fm: any) {
    let dtChegada = `${fm}`;
    let dtPartida = `${ini}`;

    let ms = moment(dtChegada, "YYYY-MM-DDTHH:mm:ssZ").diff(moment(dtPartida, "YYYY-MM-DDTHH:mm:ssZ"));
    let d = moment.duration(ms);
    let s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

    return s.match(/NaN/) ? "00:00:00" : s
}