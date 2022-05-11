FROM node:16.13.1-alpine as build

WORKDIR /usr/src/app

RUN yarn policies set-version $YARN_VERSION

COPY ["package.json", "yarn.lock", "./"]
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./

RUN yarn install --frozen-lockfile
RUN npx prisma generate
RUN yarn global add copyfiles

COPY . ./

RUN yarn run build

EXPOSE 8080

CMD ["yarn", "run", "start"]
