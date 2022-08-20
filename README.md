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

heroku container:release web


```

### Docker build local

```
docker build . -t choresbackend/cra-docker
```

### JWT

Must choose a passphrase

#### Generate private key

```
openssl genpkey -algorithm RSA -aes256 -out config/jwt/private.pem
```

#### Generate public key

```
openssl rsa -in config/jwt/private.pem -pubout -outform PEM -out config/jwt/public.pem
```
