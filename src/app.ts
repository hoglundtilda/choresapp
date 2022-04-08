import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { Express, Request, Response } from 'express'

export async function configureApp(
  app: Express,
  apollo: ApolloServer<ExpressContext>
) {
  console.log('here')

  app.get('/healthcheck', (_req: Request, res: Response) => {
    const response = {
      message: 'Hej!'
    }

    res.status(200).json(response)
  })

  await apollo.start()
  app.use(apollo.getMiddleware({ path: '/' }))
}
