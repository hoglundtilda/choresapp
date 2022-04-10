const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
import { User } from '@prisma/client'
import { VerifyCallback } from 'passport-google-oauth2'
import { RequiredSettings } from '../../settings/settings'

passport.serializeUser(function (user: User, done: VerifyCallback) {
  done(null, user)
})

passport.deserializeUser(function (user: User, done: VerifyCallback) {
  done(null, user)
})

export const googleStrategy = new GoogleStrategy(
  {
    clientID: RequiredSettings.googleClientId,
    clientSecret: RequiredSettings.googleClientSecret,
    callbackURL: 'http://localhost:5000/google/callback',
    passReqToCallback: true
  },
  function (
    _req: Request,
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback
  ) {
    return done(null, profile)
  }
)
