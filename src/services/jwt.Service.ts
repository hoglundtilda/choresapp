import { sign, verify } from 'jsonwebtoken'
import { RequiredSettings } from '../settings/env'



export const jwtSign = (userId: string): string => {
  if (RequiredSettings.jwtSecret) {
    const token = sign(userId, RequiredSettings.jwtSecret)
    return token
  } else {
    throw new Error('Error: jwtSecret not accessible')
  }
}

export const jwtVerify = (token: string) => {
  if (RequiredSettings.jwtSecret) {

    try {
      const tokenPayload = verify(token, RequiredSettings.jwtSecret) as string;
      console.log({ tokenPayload })
      return tokenPayload
    } catch (e) {
      throw new Error('Error: Not valid token', e)
    }

  } else {
    throw new Error('Error: jwtSecret not accessible')
  }
}
