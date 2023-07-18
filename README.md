# Activities App

##

### Install

```
yarn
```

### Start server

```
yarn dev
```

## DB

### Migration

```
npx prisma migrate dev --name init
```

### Heroku Deploy

Docker needs to be running for this

```
heroku login

heroku container:login

heroku container:push web --app choresbackend

heroku container:release web --app choresbackend

```

### Docker build local

```
docker build . -t choresbackend/cra-docker
```

### JWT

- Make sure to have the passphrase securely stored.
- Data in db will be lost if passphrase is lost.

#### Generate private key

```
openssl genpkey -algorithm RSA -aes256 -out config/jwt/private.pem
```

#### Generate public key

```
openssl rsa -in config/jwt/private.pem -pubout -outform PEM -out config/jwt/public.pem
```

## Prisma

When changes have been made to prisma schema run:
`npm run generate:prisma-schema`

