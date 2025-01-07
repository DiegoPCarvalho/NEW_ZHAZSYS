export function dataNova(data: string) {
    if(data === undefined){

    }else {
        const dd = data?.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1')
    
        return dd
    }
}