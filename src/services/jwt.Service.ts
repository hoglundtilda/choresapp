import fs from 'fs'
const jwt = require('jsonwebtoken');
import { keys } from '../settings/keys'

const privateKey = fs.readFileSync(keys.privateKeyFile)
const privateSecret = {
  key: privateKey,
  passphrase: keys.privateKeyPassphrase
}
const publicKey = fs.readFileSync(keys.publicKeyFile)

export const jwtSign = (userId: string): string => {


  const token = jwt.sign(userId, privateSecret, { algorithm: 'RS256' })
  return token

}

export const jwtVerify = (token: string) => {


  try {
    const tokenPayload = jwt.verify(token, publicKey, { algorithms: ['RS256'] }) as string;
    return tokenPayload
  } catch (e) {
    return null
  }


}
