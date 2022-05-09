import { sign, verify } from 'jsonwebtoken'
import { RequiredSettings } from '../settings/env'



export const jwtSign = (userId: string): string => {
  if (RequiredSettings.jwtSecret) {
    const token = sign(userId, RequiredSettings.jwtSecret, { algorithm: 'RS256' })
    return token
  } else {
    throw new Error('Error: jwtSecret not accessible')
  }
}

export const jwtVerify = (token: string) => {
  if (RequiredSettings.jwtSecret) {

    try {
      const tokenPayload = verify(token, RequiredSettings.jwtSecret,) as string;
      return tokenPayload
    } catch (e) {
      return null
    }

  } else {
    throw new Error('Error: jwtSecret not accessible')
  }
}
