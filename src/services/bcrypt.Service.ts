import bcrypt from 'bcrypt'

const saltRounds = 12

export const createPassword = async (pw: string) => {

  const hashedPassword: string = await new Promise((resolve, reject) => {
    bcrypt.hash(pw, saltRounds, function (e, hash) {
      if (e) reject(e)
      resolve(hash)
    });
  })

  return hashedPassword
}

export const comparePassword = async (passwordPayload: string, storedPassword: string) => {

  const result: boolean = await new Promise((resolve, reject) => {
    bcrypt.compare(passwordPayload, storedPassword, function (e, res) {
      if (e) reject(e)

      resolve(res)
    });
  })

  return result




}