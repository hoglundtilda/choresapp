import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { Express } from 'express';

// import cookieSession from 'cookie-session'

export async function configureApp(
  app: Express,
  apollo: ApolloServer<ExpressContext>
) {
  await apollo.start();
  app.use(apollo.getMiddleware({ path: '/' }));
}

