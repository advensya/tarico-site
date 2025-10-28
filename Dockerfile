FROM node:24-alpine

RUN corepack enable pnpm
RUN apk add --no-cache git openssh-client bash curl

WORKDIR /app
ADD package.json .npmrc .pnpmfile.cjs ./
RUN pnpm i
ADD . .
RUN pnpm build

EXPOSE ${PORT}

CMD ["node", "./server.js"]


