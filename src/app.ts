import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { Express } from 'express'

export async function configureApp(
  app: Express,
  apollo: ApolloServer<ExpressContext>
) {
  console.log('here')

  await apollo.start()
  app.use(apollo.getMiddleware({ path: '/' }))
}
