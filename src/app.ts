import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { Express } from 'express'
import passport from 'passport'
import cookieSession from 'cookie-session'
import { googleStrategy } from './services/authService/Passport.Strategy'
export async function configureApp(
  app: Express,
  apollo: ApolloServer<ExpressContext>
) {
  await apollo.start()
  app.use(
    cookieSession({
      name: 'google-auth-session',
      keys: ['key1', 'key2']
    })
  )
  passport.use('MyGoogleStrategy', googleStrategy)
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(apollo.getMiddleware({ path: '/' }))
}
