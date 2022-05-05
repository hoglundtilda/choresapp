import * as http from 'http'

import express from 'express'
// import session from "express-session";
// import passport from "passport";
import { configureApp } from './app'
import { ConnectPrismaClient } from './db/db.connection'
import { logger } from './lib'
import { createApolloServer } from './schema/graphql.server'
import { RequiredSettings } from './settings/env'

// import { initPassport } from './services/authService/Passport.Strategy';




export const startServer = async () => {
  try {
    const PORT = RequiredSettings.port

    await ConnectPrismaClient()

    const app = express()
    let httpServer
    try {
      httpServer = http.createServer(app)
      // app.use(
      //   session({
      //     resave: false,
      //     saveUninitialized: true,
      //     secret: RequiredSettings.sessionSecret || 'secret',
      //   })
      // );
      //init passport
      // app.use(passport.initialize());
      // app.use(passport.session());

      const apolloServer = createApolloServer()

      await configureApp(app, apolloServer)
      httpServer.listen(PORT)
    } catch (e) {
      console.error('Error', e)
    }
    // app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
    // app.get('/auth/google/callback', passport.authenticate('google', {
    //   successRedirect: 'http://localhost:3000/graphql',
    //   failureRedirect: 'http://localhost:3000/graphql',
    // }));

    logger.info(`Srver started: http://localhost:${PORT}`)

    return httpServer
  } catch (e) {
    logger.info('Error starting server', e)
    return e
  }
}

export default startServer()
