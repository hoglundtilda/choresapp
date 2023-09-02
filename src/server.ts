import * as http from 'http'

import { RequiredSettings } from './settings/env'
import { configureApp } from './app'
import cors from 'cors'
import { createApolloServer } from './api/graphql.server'
import express from 'express'
import { logger } from './lib'

export const startServer = async () => {
  try {
    const PORT = RequiredSettings.port
    const app = express()
    let httpServer
    try {
      app.use(
        cors({
          origin: '*'
        })
      )
      httpServer = http.createServer(app)

      const apolloServer = createApolloServer(httpServer)

      await configureApp(app, apolloServer)
      httpServer.listen({
        port: PORT,
        host: '0.0.0.0'
      })
    } catch (e) {
      console.error('Error', e)
    }

    logger.info(`Server started on port: ${PORT}`)

    return httpServer
  } catch (e) {
    logger.info('Error starting server', e)
    return e
  }
}

export default startServer()

