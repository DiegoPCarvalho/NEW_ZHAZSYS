import bcrypt from "bcryptjs";

export function criptgrafiaSenha(senha: string) {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(senha, salt)
    return hash
}
