import fs from 'fs'
import { keys } from '../settings/keys'
const jwt = require('jsonwebtoken')

const publicKey = fs.readFileSync(keys.publicKeyFile)
const privateKey = fs.readFileSync(keys.privateKeyFile)
const privateSecret = {
  key: privateKey,
  passphrase: keys.privateKeyPassphrase
}

export const jwtSign = (userId: string): string => {
  const token = jwt.sign(userId, privateSecret, { algorithm: 'RS256' })
  return token
}

export const jwtVerify = (token: string) => {
  try {
    const tokenPayload = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    }) as string
    return tokenPayload
  } catch (e) {
    return null
  }
}

