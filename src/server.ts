import * as http from 'http'

import express from 'express'
import { configureApp } from './app'
import { createApolloServer } from './graphql/graphql.server'
import { RequiredSettings } from './settings/settings'
import { ConnectPrismaClient } from './db/db.connection'
import { logger } from './lib'

export const startServer = async () => {
  try {
    const PORT = RequiredSettings.port

    await ConnectPrismaClient()

    const app = express()
    const httpServer = http.createServer(app)
    console.log('1')

    const apolloServer = createApolloServer()
    console.log('2')

    await configureApp(app, apolloServer)

    httpServer.listen(PORT)
    logger.info(`Srver started: http://localhost:${PORT}`)

    return httpServer
  } catch (e) {
    logger.info('Error starting server', e)
    return e
  }
}

export default startServer()
