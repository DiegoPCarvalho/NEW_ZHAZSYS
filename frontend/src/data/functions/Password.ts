const bcrypt = require('bcryptjs');

export default function criptPassword(senha: string){
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(senha, salt);

    return hash
}

