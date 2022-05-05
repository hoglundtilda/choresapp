import bcrypt from 'bcrypt'

const saltRounds = 12

export const hashPw = async (pw: string) => {

  const hashedPw = await new Promise((resolve, reject) => {
    bcrypt.hash(pw, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPw
}
