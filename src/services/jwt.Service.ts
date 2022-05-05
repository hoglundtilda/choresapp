import jwt from 'jsonwebtoken'
import { RequiredSettings } from '../settings/env'

export const jwtSign = (userId: string): string => {
  if (RequiredSettings.jwtSecret) {
    const token = jwt.sign(userId, RequiredSettings.jwtSecret)
    return token
  } else {
    throw new Error('Error: jwtSecret not accessible')
  }
}
