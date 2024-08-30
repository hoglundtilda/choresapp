const ensureEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Required env ${key} is not set`);
  return value;
};

export const RequiredSettings: Record<string, string> = {
  environment: ensureEnv('NODE_ENV'),
  port: ensureEnv('PORT'),
  databaseUser: ensureEnv('DB_USER'),
  databasePassword: ensureEnv('DB_PW'),
  databaseName: ensureEnv('DB_NAME'),
  databasePort: ensureEnv('DB_PORT'),
  databaseUrl: ensureEnv('DATABASE_URL'),
  // googleClientId: ensureEnv('GOOGLE_CLIENT_ID'),
  // googleClientSecret: ensureEnv('GOOGLE_CLIENT_SECRET'),
  // sessionSecret: ensureEnv('SESSION_SECRET'),
  privateKeyFile: ensureEnv('PRIVATE_KEY_FILE'),
  privateKeyPassphrase: ensureEnv('PRIVATE_KEY_PASSPHRASE'),
  publicKeyFile: ensureEnv('PUBLIC_KEY_FILE'),
};

export const OptionalSettings: Record<string, string | undefined> = {};

