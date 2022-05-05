const ensureEnv = (key: string): string => {
  const value = process.env[key]
  if (!value) throw new Error(`Required env ${key} is not set`)
  return value
}

export const RequiredSettings: Record<string, string> = {
  environment: ensureEnv('NODE_ENV'),
  port: ensureEnv('PORT'),
  databaseHost: ensureEnv('SQL_CONNECTION_NAME'),
  databaseUser: ensureEnv('DB_USER'),
  databasePassword: ensureEnv('DB_PW'),
  databaseName: ensureEnv('DB_NAME'),
  databasePort: ensureEnv('DB_PORT'),
  googleClientId: ensureEnv('GOOGLE_CLIENT_ID'),
  googleClientSecret: ensureEnv('GOOGLE_CLIENT_SECRET'),
  sessionSecret: ensureEnv('SESSION_SECRET'),
  jwtSecret: ensureEnv('JWT_SECRET')
}

// eslint-disable-next-line
// const getEnv = (key: string): string | undefined => process.env[key]

export const OptionalSettings: Record<string, string | undefined> = {}
