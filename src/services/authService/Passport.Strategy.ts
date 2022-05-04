// const GoogleStrategy = require('passport-google-oauth2').Strategy

// import { User, Prisma } from '@prisma/client'

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { prisma } from '../../db/db.connection'
import { RequiredSettings } from '../../settings/settings'

// import { Context } from '../../schema/context';


// import session from "express-session";







// const GoogleStrategy = require('passport-google-oauth20').Strategy;
export const findOrCreate = async () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: RequiredSettings.googleClientId as string,
        clientSecret: RequiredSettings.googleClientSecret as string,
        callbackURL: "/api/oauth2/redirect/google", // this is the endpoint you registered on google while creating your app. This endpoint would exist on your application for verifying the authentication
      },
      async (_accessToken, _refreshToken, profile, cb: any) => {
        if (profile.id) {
          try {
            prisma.user.findUnique({
              where: {
                google_id: profile.id
              }
            })
            return cb(null, profile);
          } catch (e: any) {
            throw new Error(e);
          }
        }

      }
    )
  );

  passport.authenticate("google", { scope: ["profile", "email"] })()

}

// export const initPassport = (app: any) => {
//   //init's the app session
//   app.use(
//     session({
//       resave: false,
//       saveUninitialized: true,
//       secret: RequiredSettings.sessionSecret || 'secret',
//     })
//   );
//   //init passport
//   // app.use(passport.initialize());
//   // app.use(passport.session());
// };


